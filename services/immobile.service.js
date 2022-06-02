import ImmobileRepository from '../repositories/immobile.repository.js';

async function createImmobile(immobile) {
  return await ImmobileRepository.createImmobile(immobile);
}

// Update

// Delete

// Check a single

// Check all
async function getImmobiles(iValue, iType, iLocation, iPayment) {
  if (iValue || iType || iLocation || iPayment)
    return await ImmobileRepository.getFilteredImmobile(iValue, iType, iLocation, iPayment);

  return await ImmobileRepository.getImmobiles();
}

export default { createImmobile, getImmobiles };
