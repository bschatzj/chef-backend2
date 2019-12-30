module.exports = {
  client: "sqlite3",
  development: {
    client: 'sqlite3',
    connection: { filename: './data/dev.sqlite3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    seeds: { directory: './data/seeds' },
  },
};
