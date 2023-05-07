const express = require("express");
const {
    getAllBlogs,
    createBlog,
    getBlogById,
    storeBlog,
} = require("../controllers/BlogController");

const router = express.Router();

// router.route("/create").get(createBlog);
router.route("/create").get(createBlog);
router.route("/store").post(storeBlog);
router.route("/").get(getAllBlogs);

module.exports = router;