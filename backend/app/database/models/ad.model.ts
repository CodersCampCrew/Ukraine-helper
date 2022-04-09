import {Schema, model} from 'mongoose';
import {Ad, Categories} from './ad.interface';



const adSchema = new Schema<Ad>({
    createdByUser: {type: String, required: true},
    createAtDate: {type: Date, required: true},
    category: {type: Categories, required: true},
    properties: {type: {mixed: any} , require : true}
})

const Ad = model<Ad>('Ad', adSchema);

export default Ad;
