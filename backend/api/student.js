const knex = require("../config/db");

module.exports = (app) => {
  const get = async (req, res) => {
    const student = await knex("student").select("*");
    return res.status(200).json(student);
  };

  const getById = async (req, res) => {
    try {
      if (!req.params.id)
        return res
          .status(400)
          .json({ message: "Este aluno não existe!", statusCode: 400 });

      const getIdstudent = await knex("student")
        .select("*")
        .where({ student_id: req.params.id })
        .first();

      if (!getIdstudent)
        return res
          .status(400)
          .json({
            message: "Este aluno não existe ou não foi encontrado",
            statusCode: 400,
          });

      return res.status(200).json(getIdstudent);
    } catch (msg) {
      return res.status(500).json({ message: msg, statusCode: 500 });
    }
  };

  const remove = async (req, res) => {
    try {
      if (!req.params.id)
        return res
          .status(400)
          .json({ message: "Este aluno não existe!", statusCode: 400 });

      const rowsDeleted = await knex("student")
        .del()
        .where({ student_id: req.params.id });
      if (!rowsDeleted)
        return res
          .status(400)
          .json({
            message: "Este aluno não existe ou não foi encontrado",
            statusCode: 400,
          });

      return res.status(204).send();
    } catch (msg) {
      return res.status(500).json({ message: msg, statusCode: 500 });
    }
  };

  const post = async (req, res) => {
    let { student_name, student_email, student_academic_record, student_cpf } =
      req.body;

    try {
      const studentFromDB = await knex("student")
        .where({ student_academic_record: student_academic_record })
        .first();
      if (studentFromDB)
        return res
          .status(400)
          .json({ message: "Registro Acadêmico já existe!", statusCode: 400 });

      const finalstudent = await knex("student").insert({
        student_name,
        student_email,
        student_academic_record,
        student_cpf,
      });

      return res
        .status(201)
        .json({ message: "Novo aluno cadastrado", student: finalstudent });
    } catch (msg) {
      return res.status(500).json({ message: msg, statusCode: 500 });
    }
  };

  const put = async (req, res) => {
    const student_id = req.params.id;
    const data = req.body;

    if (!student_id)
      return res
        .status(400)
        .json({ message: "Este aluno não existe!", statusCode: 400 });

    try {
      const finalstudent = await knex("student")
        .update(data)
        .where({ student_id });
      if (!finalstudent)
        return res
          .status(400)
          .json({
            message: "Este aluno não existe ou não foi encontrado",
            statusCode: 400,
          });

      return res
        .status(200)
        .json({ message: "aluno atualizado", finalstudent });
    } catch (msg) {
      return res.status(500).json({ message: msg, statusCode: 500 });
    }
  };

  return { get, post, getById, remove, put };
};