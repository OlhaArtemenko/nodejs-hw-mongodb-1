import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
} from '../controllers/contactController.js';

const router = Router();

router.get('/', getAllContacts);

router.get('/contacts/:contactId', getContactById);

export default router;