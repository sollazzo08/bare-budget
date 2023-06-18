import { Model } from 'objection';
import schema from './user_transaction_tag.schema.json';
import tableNames from '../../../constants/tableNames';
import { User } from '../users.model';
import { Tag } from '../../transactions/tags/tags.model';


export class UserTransactionTag extends Model {

    static get tableName(){
        return tableNames.transactionTag;
    }

    static get jsonSchema() {
        return schema;
    }
    static get relationMappings() {
        return {
          user: {
            relation: Model.HasManyRelation,
            modelClass: User,
            join: {
              from: `${tableNames.userTransactionTag}.id`,
              to: `${tableNames.user}.user_id`,
            },
          },
          tag: {
            relation: Model.HasManyRelation,
            modelClass: Tag,
            join: {
              from: `${tableNames.userTransactionTag}.id`,
              to: `${tableNames.tag}.tag_id`,
            },
          }
        };
      }
}

