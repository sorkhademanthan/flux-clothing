import { Response } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth';

export const getUserNFTs = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    // Get NFC scans for this user
    const scans = await prisma.nfcScan.findMany({
      where: { userId },
      include: {
        tag: {
          include: {
            product: true
          }
        }
      },
      orderBy: { scannedAt: 'desc' }
    });

    res.json({
      success: true,
      data: scans
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch NFC scans',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const verifyNFC = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { tagId } = req.body;
    const userId = req.user?.id;

    const nfcTag = await prisma.nfcTag.findUnique({
      where: { tagId },
      include: {
        product: true
      }
    });

    if (!nfcTag) {
      res.status(404).json({
        success: false,
        message: 'NFC tag not found or invalid'
      });
      return;
    }

    if (!nfcTag.isActive) {
      res.status(400).json({
        success: false,
        message: 'NFC tag is not active'
      });
      return;
    }

    // Create scan record
    await prisma.nfcScan.create({
      data: {
        tagId: nfcTag.id,
        userId: userId || null,
        scannedAt: new Date()
      }
    });

    res.json({
      success: true,
      message: 'NFC verified successfully',
      data: nfcTag
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to verify NFC',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
