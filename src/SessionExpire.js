import jwt_decode from "jwt-decode";

token = localStorage.getItem("token");

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const decodedToken = jwt_decode(token);

  if (!decodedToken.exp) {
    return true;
  }

  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime;
};

export const tokenExpired = isTokenExpired();
