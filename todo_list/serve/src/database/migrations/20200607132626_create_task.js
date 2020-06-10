
exports.up = function(knex) {
  knex.schema.createTable('tasks', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
  }).then(result => console.log(result)).catch(erro => console.log(erro));
};

exports.down = function(knex) {
  knex.schema.dropTable('tasks');
}
