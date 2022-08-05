module.exports = (app) => {
  app.get("/", (req, res) => {
    return res.status(200).send("backend executando");
  });

  app.route("/student").get(app.api.student.get).post(app.api.student.post);

  app
    .route("/student/:id")
    .get(app.api.student.getById)
    .delete(app.api.student.remove)
    .put(app.api.student.put);
};
