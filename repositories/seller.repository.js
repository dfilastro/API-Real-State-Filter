import { connect } from './db.js';

// PUT - Create a new seller
async function createSeller(seller) {
  const conn = await connect();

  try {
    const sql = `INSERT INTO seller (name, phone, address) VALUES ($1, $2, $3) RETURNING *`;
    const values = [seller.name, seller.phone, seller.address];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// SET - Update a seller

// DELETE - Delete a seller

// GET all sellers
async function getSellers() {
  const conn = await connect();

  try {
    const res = await conn.query(`SELECT * FROM seller`);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// GET an specific seller

export default { createSeller, getSellers };
