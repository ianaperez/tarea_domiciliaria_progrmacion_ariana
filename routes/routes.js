import express from "express";
import { createUser } from "../controllers/createUser.js";
import { loginUser } from "../controllers/loginUser.js";
import { getUser } from "../controllers/getUser.js";

const router = express.Router();

router.post("/user/register", createUser)
router.post("/user/login", loginUser);
router.get("/user", getUser)

export { router };