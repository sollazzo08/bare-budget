import { Model } from 'objection';
import schema from './tags.schema.json';
import tableNames from '../../../constants/tableNames';

export class Tag extends Model {

    static get tableName(){
        return tableNames.tag
    }

    static get jsonSchema() {
        return schema;
    }
}

