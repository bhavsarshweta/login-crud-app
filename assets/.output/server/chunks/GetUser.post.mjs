import { defineEventHandler, getCookie } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const GetUser_post = defineEventHandler(async (event) => {
  let cookie = JSON.parse(getCookie(event, "user"));
  let response;
  await prisma.usercreation.findMany({
    where: {
      NOT: {
        Username: cookie.Username
      }
    }
  }).then((res) => {
    response = res;
  }).catch((err) => {
    response = err;
  });
  return response;
});

export { GetUser_post as default };
//# sourceMappingURL=GetUser.post.mjs.map
