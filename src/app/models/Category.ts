import { model, Schema } from 'mongoose';

export const Category = model('Category', new Schema({
    name: {
        type: String,
        requred: true,
    },
    icon:  {
        type: String,
        requred: true,
    },
}));
