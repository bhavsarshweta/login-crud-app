import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const Create_Admin_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const Usercreation = await prisma.usercreation.create({
      data: {
        Username: postdata.Username,
        Password: postdata.Password,
        Role: "Admin"
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

export { Create_Admin_post as default };
//# sourceMappingURL=Create_Admin.post.mjs.map
