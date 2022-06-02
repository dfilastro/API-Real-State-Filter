import express from 'express';
import SellerController from '../controllers/seller.controller.js';

const router = express.Router();

router.post('/', SellerController.createSeller);
// router.put('/', SellerController.updateSeller);
// router.delete('/:id', SellerController.deleteSeller);
router.get('/', SellerController.getSellers);
// router.get('/:id', SellerController.getSeller);

export default router;
