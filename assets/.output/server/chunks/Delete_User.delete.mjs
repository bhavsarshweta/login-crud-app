import { defineEventHandler, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const Delete_User_delete = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const Usercreation = await prisma.usercreation.delete({
      where: {
        id: postdata.id
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

export { Delete_User_delete as default };
//# sourceMappingURL=Delete_User.delete.mjs.map
