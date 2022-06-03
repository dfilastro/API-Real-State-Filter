import pg from 'pg';
import 'dotenv/config';

async function connect() {
  if (global.connect) {
    return global.connection.connect();
  }
  console.log(process.env.DATABASE_URL);

  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  global.connection = pool;

  return pool.connect();
}

export { connect };
