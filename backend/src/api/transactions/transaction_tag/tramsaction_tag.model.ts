import { Model } from 'objection';
import schema from './transaction_tag.schema.json';
import tableNames from '../../../constants/tableNames';
import { Transaction } from '../transactions.model';
import { Tag } from '../tags/tags.model';

export class TransactionTag extends Model {

    static get tableName(){
        return tableNames.transactionTag;
    }

    static get jsonSchema() {
        return schema;
    }
    static get relationMappings() {
        return {
          transaction: {
            relation: Model.HasManyRelation,
            modelClass: Transaction,
            join: {
              from: `${tableNames.transactionTag}.id`,
              to: `${tableNames.transaction}.transaction_id`,
            },
          },
          tag: {
            relation: Model.HasManyRelation,
            modelClass: Tag,
            join: {
              from: `${tableNames.transactionTag}.id`,
              to: `${tableNames.tag}.tag_id`,
            },
          }
        };
      }
}

