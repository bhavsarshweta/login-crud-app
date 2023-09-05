import jwt from 'jsonwebtoken';

const secretKey = "abcd";
function verifyToken(token) {
  try {
    if (!token) {
      return { message: "No token provided!" };
    }
    const value = token;
    const decoded = jwt.verify(value, secretKey);
    return decoded;
  } catch (error) {
    console.log(error);
  }
}

export { verifyToken };
//# sourceMappingURL=jwt.service.mjs.map
