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

// Delete seller

// Take a single seller

async function getSellers(_req, res, next) {
  try {
    res.send(await SellerService.getSellers());
  } catch (err) {
    next(err);
  }
}

export default { createSeller, getSellers };
