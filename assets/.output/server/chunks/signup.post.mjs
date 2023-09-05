import { defineEventHandler, readBody, assertMethod } from 'h3';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
({
  password: process.env.SESSION_PASSWORD,
  cookieName: "session",
  cookieOptions: {
    secure: true
  }
});
const signup_post = defineEventHandler(async (event) => {
  const postData = await readBody(event);
  assertMethod(event, "POST");
  try {
    const { Username, Password, Role } = postData;
    {
      const existingUser = await prisma.usercreation.findUnique({
        where: {
          Username: postData.Username
        }
      });
      if (existingUser) {
        return "Username already exists.";
      }
      let hashedPassword = await bcrypt.hash(Password, 10);
      const user = await prisma.usercreation.create({
        data: {
          Username: postData.Username,
          Password: hashedPassword,
          newPassword: postData.Password,
          Role: postData.Role
        }
      });
      if (!user) {
        return { message: "User creating failed." };
      }
      if (user) {
        const str = "User Created  Sucessfully!";
        return "User Created  Sucessfully!";
      }
    }
  } catch (error) {
    return error;
  }
});

export { signup_post as default };
//# sourceMappingURL=signup.post.mjs.map
