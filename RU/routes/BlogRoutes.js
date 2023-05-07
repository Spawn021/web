const express = require("express");
const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
    storeBlog,
} = require("../controllers/BlogController");

const router = express.Router();

// router.route("/create").get(createBlog);
router.route("/store").post(storeBlog);
router.route("/:id").post(updateBlog);
router.route("/:id").get(getBlogById);
router.route("/").get(getAllBlogs);

module.exports = router;