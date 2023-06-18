require('dotenv').config();

module.exports = {
        client: 'pg',
        connection: {
          database: process.env.POSTGRES_DB,
          user: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
        },
        migrations: {
          directory: './db/migrations',
        },
};
