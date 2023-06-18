import {Knex} from "knex";

export function addDefaultColumns(table: Knex.TableBuilder) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

export function references(table: Knex.TableBuilder, tableName: string) {
  table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

