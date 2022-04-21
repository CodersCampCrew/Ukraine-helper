import { Router } from 'express';
import * as adController from '../controllers/ad.controller'

export const adRouter = Router();

adRouter.get("/all", adController.allAd);

adRouter.get("transport",adController.transport);

adRouter.get("pernamentstay",adController.pernamentStay);

adRouter.get("temporarystay",adController.temporaryStay);

adRouter.get("forkids",adController.forKids);

adRouter.get("electronic",adController.electronic);

adRouter.get("legalassistance",adController.legalAssistance);

adRouter.get("medicalassistance",adController.medicalAssistance);

adRouter.post("addad",adController.ad);