import { Model } from 'objection';
import tableNames from '../../../constants/tableNames';
import schema from './transaction_type.schema.json';



export class TransactionType extends Model {
  static get tableName() {
    return tableNames.transactionType;
  }

  static get jsonSchema() {
    return schema;
  }
}

