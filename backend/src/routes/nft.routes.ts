import { Router } from 'express';
import { getUserNFTs, verifyNFC } from '../controllers/nft.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/', getUserNFTs);
router.post('/verify', verifyNFC);

export default router;
