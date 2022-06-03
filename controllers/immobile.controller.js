import ImmobileService from '../services/immobile.service.js';

async function createImmobile(req, res, next) {
  try {
    let immobile = req.body;

    if (
      !immobile.seller_id ||
      !immobile.i_type ||
      !immobile.i_value ||
      !immobile.i_location ||
      !immobile.i_payment
    )
      throw new Error('Favor preencher todos os campos');

    immobile = await ImmobileService.createImmobile(immobile);
    res.send(immobile);
  } catch (err) {
    next(err);
  }
}

// Update immobile
async function updateImmobile(req, res, next) {
  try {
    let immobile = req.body;
    if (
      !immobile.immobile_id ||
      !immobile.i_type ||
      !immobile.i_value ||
      !immobile.i_location ||
      !immobile.i_payment
    )
      throw new Error(`Todos os campos devem ser preenchidos`);

    immobile = await ImmobileService.updateImmobile(immobile);
    res.send(immobile);
  } catch (err) {
    next(err);
  }
}

// Delete immobile
async function deleteImmobile(req, res, next) {
  try {
    await ImmobileService.deleteImmobile(req.params.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

// Take a single immobile
async function getImmobiles(req, res, next) {
  try {
    res.send(
      await ImmobileService.getImmobiles(
        req.query.i_value,
        req.query.i_type,
        req.query.i_location,
        req.query.i_payment
      )
    );
  } catch (err) {
    next(err);
  }
}

export default { createImmobile, getImmobiles, updateImmobile, deleteImmobile };
