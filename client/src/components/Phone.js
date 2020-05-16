import React, { useState, useEffect } from "react";

import Errors from "./Errors";
import firebase from "../phone_verification/firebase";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (res) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber
            // setCanSubmit(true);
            console.log("yay");
            setCanSubmit(true);
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            setCanSubmit(false);
          },
        }
      );

      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        setShowOtpField(true);
        window.confirmationResult = confirmationResult;
        setShowCaptcha(false);
      })
      .catch((error) => {
        // Error; SMS not sent
        setErrors({
          verificationError:
            "An error occurred during verification. Please try again.",
        });

        setCanSubmit(false);

        window.recaptchaVerifier.render().then(function (widgetId) {
          window.recaptchaVerifier.reset(widgetId);
        });


      });
  };

  const submitOtp = (e) => {
    e.preventDefault();

    window.confirmationResult
      .confirm(otp)
      .then((result) => console.log("success")); // verification done
  };

  return (
    <div>
      <h1>Verify phone number</h1>
      <form onSubmit={onSubmit}>
        <label>Enter your phone number:</label>
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit" disabled={!canSubmit}>
          Verify
        </button>
        {showCaptcha && <div id="recaptcha-container"></div>}
      </form>
      {showOtpField && (
        <div>
          <form onSubmit={submitOtp}>
            <label>Enter verification code:</label>
            <input value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button type="submit">Enter</button>
          </form>
        </div>
      )}
      <Errors errors={errors} />
    </div>
  );
}
