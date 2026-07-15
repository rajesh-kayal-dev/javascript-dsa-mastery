import express from "express";

import { getUserByAge,seedUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/seed", seedUsers);
router.get("/age-count", getUserByAge);

export default router;