import pg from 'pg';

async function connect() {
  if (global.connect) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      'postgres://vmdqomuj:7ODOABunKs9qo-AmY0EymeUffQMhpHuE@heffalump.db.elephantsql.com/vmdqomuj',
  });

  global.connection = pool;

  return pool.connect();
}

export { connect };
