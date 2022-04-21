import { authMiddleware } from '@middlewares/auth.middleware';
import { Router } from 'express';
import * as adController from '../controllers/ad.controller'

export const adRouter = Router();

adRouter.post("/", authMiddleware, adController.createAd);

adRouter.get("/all", adController.allAd);

adRouter.get("transport",adController.transport);

adRouter.get("pernamentstay",adController.pernamentStay);

adRouter.get("temporarystay",adController.temporaryStay);

adRouter.get("forkids",adController.forKids);

adRouter.get("electronic",adController.electronic);

adRouter.get("legalassistance",adController.legalAssistance);

adRouter.get("medicalassistance",adController.medicalAssistance);
