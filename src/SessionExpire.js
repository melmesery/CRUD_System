import jwt_decode from "jwt-decode";

export const isTokenExpired = (token) => {
  console.log(token);
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

