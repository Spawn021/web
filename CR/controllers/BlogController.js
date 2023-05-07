const blogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        res.render('home', {blogs:blogs.map(blog => blog.toObject())});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createBlog = async (req, res) =>{
    res.render('create');
};
exports.storeBlog = async (req, res) =>{
    const blog = await blogService.createBlog(req.body)
    res.redirect('/');
};