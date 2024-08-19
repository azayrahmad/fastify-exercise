import fp from "fastify-plugin";

export default fp(async (fastify) => {
  fastify.addHook("onRoute", (routeOptions) => {
    console.log(`Registered route: ${routeOptions.url}`);
  });
});
