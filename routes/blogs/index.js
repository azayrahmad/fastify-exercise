import blogRoutes from "./blogRoutes.js";

// Register routes to handle blog posts
export default async function (fastify, opts) {
  blogRoutes.forEach((route, index) => {
    fastify.route(route);
  });
}
