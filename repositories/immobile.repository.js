import { connect } from './db.js';

// POST - Create a new immobile
async function createImmobile(immobile) {
  const conn = await connect();

  try {
    const sql = `INSERT INTO immobile (seller_id, i_type, i_value, i_location, i_payment, i_rooms, i_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [
      immobile.seller_id,
      immobile.i_type,
      immobile.i_value,
      immobile.i_location,
      immobile.i_payment,
      immobile.i_rooms,
      immobile.i_url,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// PUT - Update a immobile
async function updateImmobile(immobile) {
  const conn = await connect();

  try {
    const sql = `UPDATE immobile SET i_type = $1, i_value = $2, i_location = $3, i_payment = $4, i_rooms = $5, i_url = $6 WHERE immobile_id = $7 RETURNING *`;
    const values = [
      immobile.i_type,
      immobile.i_value,
      immobile.i_location,
      immobile.i_payment,
      immobile.i_rooms,
      immobile.i_url,
      immobile.immobile_id,
    ];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// DELETE - Delete a immobile
async function deleteImmobile(i_id) {
  const conn = await connect();

  try {
    await conn.query('DELETE FROM immobile WHERE immobile_id = $1', [i_id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// GET all immobiles
async function getImmobiles() {
  const conn = await connect();

  try {
    const res = await conn.query(`SELECT * FROM immobile`);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

// GET an specific immobile
async function getFilteredImmobile(iValue, iType, iLocation, iPayment) {
  const conn = await connect();

  let filters = [];
  let values = [];
  let counter = 0;
  let dbString = '';

  if (iValue) {
    values.push(iValue);
    counter++;
    filters.push('i_value < $' + counter);
  }

  if (iType) {
    values.push(iType);
    counter++;
    filters.push('i_type = $' + counter);
  }

  if (iLocation) {
    values.push(iLocation);
    counter++;
    filters.push('i_location = $' + counter);
  }

  if (iPayment) {
    values.push(iPayment);
    counter++;
    filters.push('i_payment = $' + counter);
  }

  for (let i = 0; i < filters.length - 1; i++) {
    dbString += filters[i] + ' AND ';
  }

  dbString += filters[filters.length - 1];

  try {
    const res = await conn.query(`SELECT * FROM immobile WHERE ${dbString}`, values);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  createImmobile,
  updateImmobile,
  deleteImmobile,
  getImmobiles,
  getFilteredImmobile,
};
