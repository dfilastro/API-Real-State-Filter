import express from 'express';
import ImmobileController from '../controllers/immobile.controller.js';

const router = express.Router();

router.post('/', ImmobileController.createImmobile);
router.put('/', ImmobileController.updateImmobile);
router.delete('/:id', ImmobileController.deleteImmobile);
router.get('/', ImmobileController.getImmobiles);
// router.get('/:id', ImmobileController.getImmobile);

export default router;
