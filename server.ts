import express from "express";
import * as dotenv from "dotenv";
import db from "./src/db";
import { follow, getFollower } from "./src/controllers/followController";
import router from "./src/routes";
import path from "path";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("uploads", express.static(path.join(__dirname, "src/uploads")));
app.use(router);

app.get("/", async (req, res) => {
  const list_user = await db.user.findMany();
  const listsingle_user = await db.user.findFirst({
    where: {
      id: 1,
    },
  });

  res.send({ list_user, listsingle_user });
});

app.post("/follow", follow);
app.get("/followers/:id", getFollower);

app.listen(port, async () => {
  await db.$connect();
  console.log(`Server is running on port ${port}`);
});
