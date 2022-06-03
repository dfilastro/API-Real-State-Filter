import ImmobileRepository from '../repositories/immobile.repository.js';

async function createImmobile(immobile) {
  return await ImmobileRepository.createImmobile(immobile);
}

// Update
async function updateImmobile(immobile) {
  return await ImmobileRepository.updateImmobile(immobile);
}

// Delete
async function deleteImmobile(i_id) {
  return await ImmobileRepository.deleteImmobile(i_id);
}

// Check a single

// Check all
async function getImmobiles(iValue, iType, iLocation, iPayment) {
  if (iValue || iType || iLocation || iPayment)
    return await ImmobileRepository.getFilteredImmobile(iValue, iType, iLocation, iPayment);

  return await ImmobileRepository.getImmobiles();
}

export default { createImmobile, getImmobiles, updateImmobile, deleteImmobile };
