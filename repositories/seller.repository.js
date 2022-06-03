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
async function updateSeller(seller) {
  const conn = await connect();

  try {
    const sql = `UPDATE immobile SET name = $1, phone = $2, address = $3 WHERE seller_id = $4 RETURNING *`;
    const values = [seller.name, seller.phone, seller.address, seller.seller_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// DELETE - Delete a seller
async function deleteSeller(s_id) {
  const conn = await connect();

  try {
    await conn.query(`DELETE FROM immobile WHERE seller_id = $1`, [s_id]);
    await conn.query(`DELETE FROM seller WHERE seller_id = $1`, [s_id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

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

export default { createSeller, getSellers, updateSeller, deleteSeller };
