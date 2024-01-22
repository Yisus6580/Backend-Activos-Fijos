import { Router } from 'express';
import {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
} from '../controllers/employee-controller';
import upload from '../middlewares/multer';

const router = Router();

// Rutas
router.get('/', getAllEmployee);
router.get('/:id', getEmployeeById);
router.post('/', upload.single('image'), createEmployee);
router.put('/:id', upload.single('image'), updateEmployee);

export default router;
