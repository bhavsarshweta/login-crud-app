import { defineEventHandler, assertMethod, getCookie } from 'h3';
import { d as db } from './prisma.mjs';
import { verifyToken } from './jwt.service.mjs';
import '@prisma/client';
import 'jsonwebtoken';

const testToken = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  try {
    const token = getCookie(event, "token");
    const userID = verifyToken(token);
    const user = await db.usercreation.findUnique({
      where: {
        id: userID == null ? void 0 : userID.userId
      }
    }).then(async (user2) => {
    });
    return "done";
  } catch (error) {
    return "This is error" + error;
  }
});

export { testToken as default };
//# sourceMappingURL=testToken.mjs.map
