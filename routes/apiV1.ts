import express from "express";
import handler from "#handlers";

const router = express.Router();
const auth = new handler.auth_handler();

router.get("/", auth.index);

export default router;
