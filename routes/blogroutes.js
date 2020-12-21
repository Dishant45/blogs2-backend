const Blogs = require("../model/blogschema");
const express = require("express");
const app = express();
const multer = require("multer");

const router = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const {
  //   createBlog,
  getAllBlog,
  getBlogById,
  deleteBlogById,
} = require("../controller/blogcontroller");

router.post("/addblog", upload.single("recfile"), (req, res, next) => {
  const Blogs1 = new Blogs({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    links: req.body.links,
    imageUrl: req.file.path,
  });
  if (err) {
    res.send(err);
    console.log(err);
    return err;
  }
  Task1.save();
  res.send("task created");
});

router.route("/getallblog").get(getAllBlog);
router.route("/:_id").get(getBlogById); //for finding blog with id
router.route("/:_id").delete(deleteBlogById); //for deleting blog with id

module.exports = router;
