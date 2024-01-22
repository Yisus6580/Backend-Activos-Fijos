import { Router } from 'express';

import {
  createAssignment,
  getAllAssignment,
  getAssignmentById,
  updateAssignment,
} from '../controllers/assignments-controller';

const router = Router();

// Rutas
router.get('/', getAllAssignment);
router.get('/:id', getAssignmentById);
router.post('/', createAssignment);
router.put('/:id', updateAssignment);

export default router;
