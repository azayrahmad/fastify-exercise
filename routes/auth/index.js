export default async function (fastify, opts) {
  fastify.post("/gettoken", async (request, reply) => {
    const { email, username, userId } = request.body;
    if (!email || !username || !userId) {
      reply
        .status(400)
        .send({ error: true, msg: "Mandatory fields are missing" });
    }
    //SET DB level checks if any
    const token = fastify.jwt.sign(
      { email, username, userId },
      { expiresIn: 86400 }
    );
    reply.send({ token, email, userId });
  });

  fastify.get(
    "/validatetoken",
    {
      preValidation: [fastify.authenticate],
    },
    async function (req, res) {
      res.status(200).send({ msg: "Success" });
    }
  );
}
