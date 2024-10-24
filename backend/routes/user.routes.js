import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";
import { isLogin } from "../customMiddleware/isAuthorized.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", isLogin, getUser);
router.put("/:id", isLogin, updateUser);
router.delete("/:id", isLogin, deleteUser);

export default router;
