const blogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogService.getAllBlogs();
        // res.send(blogs);//blogs list -> 
        res.render('home', {blogs:blogs.map(blog => blog.toObject())});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.storeBlog = async (req, res) =>{
    const blog = await blogService.createBlog(req.body)
    res.redirect('/');
};
exports.getBlogById = async (req, res) =>{
    try{
        const blog = await blogService.getBlogById(req.params.id);
        res.render('edit', {blog:blog? blog.toObject() : blog});
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.deleteBlog = async (req, res) =>{
    try{
        const blog = await blogService.deleteBlog(req.params.id, req.body);
        //alert('Delete successfully');
        res.redirect('/');
    }catch(err){
        res.status(500).json({error: err.message});
    }
};