const Blogs = require("../model/blogschema");
// router.route("/createblog").post(createBlog);
// const createBlog = (req, res) => {
//   const Blogs1 = new Blogs({
//     author: req.body.author,
//     title: req.body.title,
//     content: req.body.content,
//     links: req.body.links,
//     imageUrl: req.body.imageUrl,
//   });
//   if (err) {
//     res.send(err);
//     return err;
//   }
//   Task1.save();
//   res.send("task created");
// };

const getAllBlog = async (req, res) => {
  const blogs = await Blogs.find((err, data) => {
    try {
      if (!err) {
        res.send(data);
      } else {
        res.send(err);
      }
    } catch {
      return err;
    }
  });
};

const getBlogById = (req, res) => {
  Blogs.findById({ _id: req.params._id }, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
      console.log(err);
    }
  });
};

const deleteBlogById = (req, res) => {
  const user = Blogs.findByIdAndDelete({ _id: req.params._id }, (err, data) => {
    if (err) {
      res.send("blog not deleted");
    } else {
      res.send("blog deleted succesfully");
    }
  });
};

// module.exports.createBlog = createBlog;
module.exports.getAllBlog = getAllBlog;
module.exports.getBlogById = getBlogById;
module.exports.deleteBlogById = deleteBlogById;
