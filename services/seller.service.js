import SellerRepository from '../repositories/seller.repository.js';

async function createSeller(seller) {
  return await SellerRepository.createSeller(seller);
}

// Update

// Delete

// Check a single

// Check all
async function getSellers() {
  return await SellerRepository.getSellers();
}

export default { createSeller, getSellers };
