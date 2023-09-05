import { defineEventHandler, setCookie } from 'h3';

const signout = defineEventHandler(async (event) => {
  var _a;
  try {
    const token = (_a = event.node.req.headers.cookie) == null ? void 0 : _a.split(";").map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith("token="));
    if (token) {
      try {
        setCookie(event, "token", "", { expires: new Date(0) });
        setCookie(event, "user", "", { expires: new Date(0) });
        return { message: "User signed out successfully." };
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  } catch (error) {
    return error;
  }
});

export { signout as default };
//# sourceMappingURL=signout.mjs.map
