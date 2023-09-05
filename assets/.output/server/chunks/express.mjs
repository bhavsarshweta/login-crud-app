import express$1 from 'express';
import { PrismaClient } from '@prisma/client';

new PrismaClient();
const app = express$1();
app.use(express$1.json());
app.use(express$1.urlencoded({ extended: true }));
function express(req, res) {
  const { action } = req.params;
  if (action === "signin") {
    res.json({ message: "Signin successful" });
  } else if (action === "signup") {
    res.json({ message: "Signup successful" });
  } else {
    res.status(400).json({ error: "Invalid action" });
  }
}

export { express as default };
//# sourceMappingURL=express.mjs.map
