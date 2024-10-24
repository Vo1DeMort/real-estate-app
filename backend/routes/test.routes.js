import express from "express";
import { isAdmin, isAuthenticated } from "../controllers/test.controllers.js";

const router = express.Router();

router.get("/isAuthenticated", isAuthenticated);

router.get("/isAdmin", isAdmin);

export default router;
