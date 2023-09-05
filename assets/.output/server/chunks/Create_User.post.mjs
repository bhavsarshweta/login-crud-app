import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const Create_User_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const Usercreation = await prisma.usercreation.create({
      data: {
        Username: postdata.Username,
        Password: postdata.Password,
        Role: "User"
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

export { Create_User_post as default };
//# sourceMappingURL=Create_User.post.mjs.map
