import { Model } from 'objection';
import tableNames from '../../../constants/tableNames';
import schema from './account_type.schema.json';


export class AccountType extends Model {
  static get tableName() {
    return tableNames.accountType;
  }

  static get jsonSchema() {
    return schema;
  }
}
