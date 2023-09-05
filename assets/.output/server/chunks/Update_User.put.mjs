import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const Update_User_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  let hashedPassword = await bcrypt.hash(postdata.Password, 10);
  try {
    const Usercreation = await prisma.usercreation.update({
      where: {
        id: postdata.id
      },
      data: {
        Username: postdata.Username,
        Password: hashedPassword,
        newPassword: postdata.Password
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

export { Update_User_put as default };
//# sourceMappingURL=Update_User.put.mjs.map
