import { Model} from 'objection'
import tableNames from '../../constants/tableNames';
import schema from './users.schema.json';


export class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  static get jsonSchema() {
    return schema;
  }
}