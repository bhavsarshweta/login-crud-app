import { defineEventHandler, assertMethod, readBody, setCookie } from 'h3';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { d as db } from './prisma.mjs';

new PrismaClient();
const secretKey = "abcd";
const generateToken = (id) => {
  return jwt.sign({ userId: id }, secretKey, {
    expiresIn: "10h"
  });
};
const signin = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const postData = await readBody(event);
  const { Username } = postData;
  try {
    let user = await db.usercreation.findUnique({
      where: {
        Username
      }
    });
    if (!user) {
      return { message: "Username does not exists." };
    }
    const isPasswordValid = await bcrypt.compare(postData.Password, user.Password);
    if (!isPasswordValid) {
      return { message: "password mismatch." };
    }
    if (user && isPasswordValid) {
      let use = user.Role;
      let users;
      if (use == "User")
        users = "https://www.google.com";
      else if (use == "Admin")
        users = "/UserData";
      const token = generateToken(user.id);
      setCookie(event, "user", JSON.stringify(user));
      setCookie(event, "token", token);
      return { users, token };
    }
  } catch (error) {
    console.log(error);
    return error;
  }
});

export { signin as default };
//# sourceMappingURL=signin.mjs.map
