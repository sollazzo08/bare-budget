import { Model } from 'objection';
import tableNames from '../../constants/tableNames';
import schema from './accounts.schema.json';
import { User }from '../users/users.model';
import { AccountType } from './account_type/account_type.model';


export class Account extends Model {
  static get tableName() {
    return tableNames.account;
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
          from: `${tableNames.account}.id`,
          to: `${tableNames.user}.user_id`,
        },
      },
      account_type: {
        relation: Model.HasManyRelation,
        modelClass: AccountType,
        join: {
          from: `${tableNames.account}.id`,
          to: `${tableNames.accountType}.account_type_id`,
        },
      },
    };
  }

}
