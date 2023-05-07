const express = require("express");
const {
    getAllBlogs,
    getBlogById,
    deleteBlog,
    storeBlog,
} = require("../controllers/BlogController");

const router = express.Router();

// router.route("/create").get(createBlog);
router.route("/store").post(storeBlog);
router.route("/:id/delete").get(deleteBlog);
router.route("/:id").get(getBlogById);
router.route("/").get(getAllBlogs);

module.exports = router;