import AdModel from "@database/models/ad.model";
import express, { NextFunction, Request, Response, Router } from 'express';

export const adRouter = Router();

//Get

adRouter.get('/all' , async (req, res) =>{
    const allAd = await AdModel.find()
})

adRouter.get('/transport' , async (req, res)=>{
    try {
    const transport = await AdModel.find( {category: 'transport'});
    res.status(200).json(transport);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/permanentStay' , async (req, res)=>{
    try {
    const permanentStay = await AdModel.find( {category: 'permanentStay'});
    res.status(200).json(permanentStay);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/permanentStay' , async (req, res)=>{
    try {
    const permanentStay = await AdModel.find( {category: 'permanentStay'});
    res.status(200).json(permanentStay);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/temporaryStay' , async (req, res)=>{
    try {
    const temporaryStay = await AdModel.find( {category: 'temporaryStay'});
    res.status(200).json(temporaryStay);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/sleepover' , async (req, res)=>{
    try {
    const sleepover = await AdModel.find( {category: 'sleepover'});
    res.status(200).json(sleepover);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/forkids' , async (req, res)=>{
    try {
    const forkids = await AdModel.find( {category: 'forkids'});
    res.status(200).json(forkids);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/electronic' , async (req, res)=>{
    try {
    const electronic = await AdModel.find( {category: 'electronic'});
    res.status(200).json(electronic);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/legalAssistance' , async (req, res)=>{
    try {
    const legalAssistance = await AdModel.find( {category: 'legalAssistance'});
    res.status(200).json(legalAssistance);
    }
    catch (error){
        res.status(404)
    }
});

adRouter.get('/medicalAssistance' , async (req, res)=>{
    try {
    const medicalAssistance = await AdModel.find( {category: 'medicalAssistance'});
    res.status(200).json(medicalAssistance);
    }
    catch (error){
        res.status(404)
    }
});

//Post
adRouter.post('/createAd', async (req,res) => {
    const ad = new AdModel({
        createdBy: req.body.createdBy,
        createdAt: req.body.createdAt,
        category: req.body.category,
        properties: req.body.properties
    });

    try{
        await ad.save();
        res.status(201).json(ad);
    } catch (error){
        res.status(422).json({ message: error.message});
        console.log(error);
    }
});