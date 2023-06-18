import { Model } from 'objection';
import tableNames from '../../constants/tableNames';
import schema from './categories.schema.json';
import { User } from "../users/users.model";

export class Category extends Model {
  static get tableName() {
    return tableNames.category;
  }

  static get jsonSchema() {
    return schema;
  }
}

