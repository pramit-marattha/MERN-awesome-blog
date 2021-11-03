import express from "express";

import { getAllBlogPosts } from "../controllers/blogPosts.controller.js";

const router = express.Router();

router.get("/", getAllBlogPosts);

export default router;
