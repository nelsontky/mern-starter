const admin = require("firebase-admin");

const serviceAccountKey = require("../../secrets.json")
  .firebaseServiceAccountKey;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: "https://gammago-ca894.firebaseio.com",
});

module.exports = async function isPhoneVerified(phone) {
  try {
    await admin.auth().getUserByPhoneNumber(phone);
    return true;
  } catch (e) {
    return false;
  }
}
