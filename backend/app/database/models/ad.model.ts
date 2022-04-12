import {Schema, model} from 'mongoose';
import {Ad, Categories} from './ad.interface';


const adSchema = new Schema<Ad>({
    createdBy: {type: String, required: true},
    createdAt: {type: Date, required: true},
    category: {type: String,  enum: Object.values(Categories), required: true},
    properties: {type: {} , require : true}
})

const AdModel = model<Ad>('Ad', adSchema);

export default AdModel;
