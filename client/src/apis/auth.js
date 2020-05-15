import axios from "axios";
import qs from "qs";

const getOptions = (url, params) => {
  return {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(params),
    url,
  };
};

export async function login(username, password) {
  try {
    return await axios(getOptions("/api/login", { username, password }));
  } catch (e) {
    return e.response;
  }
}

export async function register(username, password, password2) {
  try {
    return await axios(
      getOptions("/api/register", { username, password, password2 })
    );
  } catch (e) {
    return e.response;
  }
}

export async function logout() {
  try {
    return await axios.get("/api/logout");
  } catch (e) {
    return e.response;
  }
}

export async function checkAuthenticated() {
  try {
    return await axios.get("/api/user");
  } catch (e) {
    return e.response;
  }
}
