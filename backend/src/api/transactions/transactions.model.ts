import {Model} from 'objection';
import schema from './transactions.schema.json';
import tableNames from '../../constants/tableNames';

import {TransactionType} from './transaction_type/transaction_type.model';
import { Account } from '../accounts/accounts.model';
import { Category } from '../categories/categories.model';
import { User } from '../users/users.model';

export class Transaction extends Model {

    static get tableName(){
        return tableNames.transaction;
    }

    static get jsonSchema() {
        return schema;
    }
    static get relationMappings() {
        return {
          category: {
            relation: Model.HasOneRelation,
            modelClass: Category,
            join: {
              from: `${tableNames.transaction}.id`,
              to: `${tableNames.category}.id`,
            },
          },
          transaction_type: {
            relation: Model.HasManyRelation,
            modelClass: TransactionType,
            join: {
              from: `${tableNames.transaction}.id`,
              to: `${tableNames.transactionType}.id`,
            },
          },
          account: {
            relation: Model.HasManyRelation,
            modelClass: Account,
            join: {
              from: `${tableNames.transaction}.id`,
              to: `${tableNames.account}.id`,
            },
          },
          user: {
            relation: Model.HasManyRelation,
            modelClass: User,
            join: {
              from: `${tableNames.transaction}.id`,
              to: `${tableNames.user}.id`,
            },
          },
        };
      }
}

