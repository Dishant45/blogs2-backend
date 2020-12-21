const mongoose = require("mongoose");
const uniqid = require("uniqid");

const blogSchema = mongoose.Schema({
  id: {
    type: String,
    default: uniqid(),
  },
  author: {
    type: String,
    required: [true, "author name is required"],
  },
  title: {
    type: String,
    required: [true, "title name is required"],
  },
  content: {
    type: String,
    required: [true, "content is required"],
  },
  links: {
    type: "array",
    items: [
      {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          id: {
            type: "string",
          },
        },
        required: ["title", "id"],
      },
    ],
  },
  imageUrl: {
    type: "string",
    required: [true, "imageUrl is required"],
  },
});

const Blogs = mongoose.model("Blog", blogSchema);
module.exports = Blogs;
