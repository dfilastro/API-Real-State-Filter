import SellerRepository from '../repositories/seller.repository.js';

async function createSeller(seller) {
  return await SellerRepository.createSeller(seller);
}

// Update
async function updateSeller(seller) {
  return await SellerRepository.updateSeller(seller);
}

// Delete
async function deleteSeller(s_id) {
  return await SellerRepository.deleteSeller(s_id);
}

// Check a single

// Check all
async function getSellers() {
  return await SellerRepository.getSellers();
}

export default { createSeller, getSellers, updateSeller, deleteSeller };
