import blogController from "../../controller/blogs.js";

const getBlogValidation = {
  params: {
    id: { type: "integer" },
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
      },
    },
  },
};

const addBlogValidation = {
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: { type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
      },
    },
  },
};

const routes = [
  {
    method: "GET",
    url: "/",
    handler: blogController.getAllBlogs,
  },
  {
    method: "GET",
    url: "/:id",
    schema: getBlogValidation, // add validation
    handler: blogController.getBlog,
  },
  {
    method: "POST",
    url: "/",
    schema: addBlogValidation,
    handler: blogController.addBlog,
  },
  {
    method: "PUT",
    url: "/:id",
    handler: blogController.updateBlog,
  },
  {
    method: "DELETE",
    url: "/:id",
    handler: blogController.deleteBlog,
  },
];

export default routes;
