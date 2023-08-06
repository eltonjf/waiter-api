import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
    name: {
        type: String,
        requred: true,
    },
    description:  {
        type: String,
        requred: true,
    },
    imagePath:  {
        type: String,
        requred: true,
    },
    price:  {
        type: Number,
        requred: true,
    },
    ingredients: {
        required: true,
        type: [{
            name:  {
                type: String,
                requred: true,
            },
            icon:  {
                type: String,
                requred: true,
            },
        }],
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
    },
}));
