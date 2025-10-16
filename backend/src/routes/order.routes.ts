import { Router } from 'express';
import {
  createOrder,
  getUserOrders,
  getOrderById
} from '../controllers/order.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.post('/', createOrder);
router.get('/', getUserOrders);
router.get('/:id', getOrderById);

export default router;
