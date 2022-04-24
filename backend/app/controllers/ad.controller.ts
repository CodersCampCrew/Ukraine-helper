import { Ad } from '@database/models/ad.interface';
import AdModel from '@database/models/ad.model';
import User from '@database/models/user.model';
import RequestWithUser from '@utils/requestwithcontext.interface';
import express, { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DateTime } from 'luxon';

export const adRouter = Router();

export const allAd = async (req: Request, res: Response) => {
  try {
    const allAd = await AdModel.find();
    res.status(StatusCodes.ACCEPTED).json(allAd);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

export const transport = async (req: Request, res: Response) => {
  try {
    const transport = await AdModel.find({ category: 'transport' });
    res.status(200).json(transport);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

export const pernamentStay = async (req: Request, res: Response) => {
  try {
    const permanentStay = await AdModel.find({ category: 'permanentStay' });
    res.status(200).json(permanentStay);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

export const temporaryStay = async (req: Request, res: Response) => {
  try {
    const temporaryStay = await AdModel.find({ category: 'temporaryStay' });
    res.status(200).json(temporaryStay);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

export const sleepover = async (req: Request, res: Response) => {
  try {
    const sleepover = await AdModel.find({ category: 'sleepover' });
    res.status(200).json(sleepover);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

export const forKids = async (req: Request, res: Response) => {
  try {
    const forKids = await AdModel.find({ category: 'forKids' });
    res.status(200).json(forKids);
  } catch (error) {
    res.status(404);
  }
};

export const electronic = async (req: Request, res: Response) => {
  try {
    const electronic = await AdModel.find({ category: 'electronic' });
    res.status(200).json(electronic);
  } catch (error) {
    res.status(404);
  }
};

export const legalAssistance = async (req: Request, res: Response) => {
  try {
    const legalAssistance = await AdModel.find({ category: 'legalAssistance' });
    res.status(200).json(legalAssistance);
  } catch (error) {
    res.status(404);
  }
};

export const medicalAssistance = async (req: Request, res: Response) => {
  try {
    const medicalAssistance = await AdModel.find({
      category: 'medicalAssistance'
    });
    res.status(200).json(medicalAssistance);
  } catch (error) {
    res.status(404);
  }
};

//Post
export const createAd = async (req: RequestWithUser, res: Response) => {
  const ad = new AdModel({
    createdBy: req.user?._id,
    createdAt: DateTime.utc().toJSDate(),
    category: req.body.category,
    properties: req.body.properties
  });

  try {
    await ad.save();
    res.status(201).json(ad);
  } catch (error) {
    res.status(422).json({ message: error.message });
    console.log(error);
  }
};

export const getAd = async (req: RequestWithUser, res: Response) => {
  const id = req.params.id;
  try {
    let data: any = await AdModel.findById(id);
    const user: any = await User.findById(data.createdBy as string);
    data = { ...data, phone: user.phone };
    console.log(data);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
