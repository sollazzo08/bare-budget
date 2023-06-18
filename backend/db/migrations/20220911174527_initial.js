// const tableNames = require('../../src/constants/tableNames.ts');
// const { references } = require('../../src/lib/tableUtils.ts');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable('user', (table) => {
    table.increments().notNullable();
    table.string('username', 254).notNullable().unique();
    table.string('email').notNullable();
    table.string('password', 127).notNullable();
    table.dateTime('last_login');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('account_type', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('account', (table) => {
    table.increments().notNullable();
    table.string('name', 25).notNullable().unique();
    table.integer('balance').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('user');
    table.integer('account_type_id').unsigned().references('id').inTable('account_type');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('category', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('transaction_type', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('tag', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('user_transaction_tag', (table) => {
    table.increments().notNullable();
    table.integer('user_id').unsigned().references('id').inTable('user');
    table.integer('tag_id').unsigned().references('id').inTable('tag');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('transaction', (table) => {
    table.increments().notNullable();
    table.integer('amount').notNullable();
    table.date('date').notNullable();
    table.string('note');
    table.integer('category_id').unsigned().references('id').inTable('category');
    table.integer('transaction_type_id').unsigned().references('id').inTable('transaction_type');
    table.integer('account_id').unsigned().references('id').inTable('account');
    table.integer('user_id').unsigned().references('id').inTable('user');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('transaction_tag', (table) => {
    table.increments().notNullable();
    table.integer('transaction_id').unsigned().references('id').inTable('transaction');
    table.integer('tag_id').unsigned().references('id').inTable('tag');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable('notification', (table) => {
    table.increments().notNullable();
    table.string('message').notNullable().unique();
    table.boolean('read').notNullable();
    table.string('notification_type').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('user');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {

  await knex.schema.dropTable('notification');
  await knex.schema.dropTable('transaction_tag');
  await knex.schema.dropTable('transaction');
  await knex.schema.dropTable('user_transaction_tag');
  await knex.schema.dropTable('transaction_type');
  await knex.schema.dropTable('category');
  await knex.schema.dropTable('account');
  await knex.schema.dropTable('account_type');
  await knex.schema.dropTable('tag');
  await knex.schema.dropTable('user');
};
