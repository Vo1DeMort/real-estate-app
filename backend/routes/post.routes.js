import express from "express";
import { isLogin } from "../customMiddleware/isAuthorized.js";
import {
  posts,
  post,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.contorllers.js";

const router = express.Router();

router.get("/", posts);
router.get("/:id", post);
router.post("/", isLogin, createPost);
router.put("/:id", isLogin, updatePost);
router.delete("/:id", isLogin, deletePost);

export default router;
