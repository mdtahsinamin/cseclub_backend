// Import required packages and models
const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Define route handler for DELETE request to '/api/v1/blogs/:blogId'
router.delete("/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    await blog.remove();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Export router
module.exports = router;