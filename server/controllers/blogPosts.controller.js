import express from "express";
import mongoose from "mongoose";

const router = express.Router();

export const getAllBlogPosts = (req, res) => {
  res.send("Awesome MERN BLOG");
};

export default router;
