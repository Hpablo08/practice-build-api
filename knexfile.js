// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      port: 5432,
      user: "postgres",
      password: "hjp2008",
      database: "poursNpups",
    },
  },

  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "poursNpups",
  //     user: "postgres",
  //     password: "hjp2008",
  //   },