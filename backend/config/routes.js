module.export = (app) => {
  app.get("/", (req, res) => {
    return res.status(200).send("Backend executando!");
  });

  app.route("/student").get(app.api.student.get).post(app.api.student.post);

  app
    .route("/student/:id")
    .get(app.api.student.getById)
    .delete(app.api.student.delete)
    .put(app.api.student.put);
};
