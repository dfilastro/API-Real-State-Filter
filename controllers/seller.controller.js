import SellerService from '../services/seller.service.js';

async function createSeller(req, res, next) {
  try {
    let seller = req.body;

    if (!seller.name || !seller.phone || !seller.address)
      throw new Error('Favor preencher todos os campos');

    seller = await SellerService.createSeller(seller);
    res.send(seller);
  } catch (err) {
    next(err);
  }
}

// Update seller
async function updateSeller(req, res, next) {
  try {
    let seller = req.body;
    if (!seller.seller_id || !seller.name || !seller.phone || !seller.addres)
      throw new Error('Preencher todos os campos');

    seller = await SellerService.updateSeller(seller);
    res.send(seller);
  } catch (err) {
    next(err);
  }
}

// Delete seller
async function deleteSeller(req, res, next) {
  try {
    await SellerService.deleteSeller(req.params.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

// Take a single seller

async function getSellers(_req, res, next) {
  try {
    res.send(await SellerService.getSellers());
  } catch (err) {
    next(err);
  }
}

export default { createSeller, getSellers, updateSeller, deleteSeller };
