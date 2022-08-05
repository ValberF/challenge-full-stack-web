exports.up = function (knex) {
  return knex.schema.createTable("student", (table) => {
    table.increments("student_id").primary();
    table.string("student_name").notNull();
    table.string("student_email").notNull();
    table.string("student_academic_record").unique().notNull();
    table.string("student_cpf").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("student");
};
