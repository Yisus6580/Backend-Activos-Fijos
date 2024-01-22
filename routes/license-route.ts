import { Router } from 'express';
import {
  getAllLicenses,
  getLicenseById,
  createLicense,
  updateLicense,
} from '../controllers/license-controller';

const router = Router();

// Rutas
router.get('/', getAllLicenses);
router.get('/:id', getLicenseById);
router.post('/', createLicense);
router.put('/:id', updateLicense);

export default router;
