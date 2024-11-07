import express from "express";
const router = express.Router();

import * as blogController from "../app/controllers/blogController.js";

// create route
router.post("/createBlog", blogController.createBlog);

// read route
router.get("/readBlog", blogController.readBlog);

// update route
router.put("/updateBlog", blogController.updateBlog);

// delete route
router.delete("/deleteBlog", blogController.deleteBlog);

export default router;
