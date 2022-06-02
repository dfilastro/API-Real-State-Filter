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

// DELETE - Delete a immobile

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

export default { createImmobile, getImmobiles, getFilteredImmobile };
