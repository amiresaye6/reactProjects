import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        new_price: {
            type: Number,
            required: true,
        },
        old_price: {
            type: Number,
            required: true,
        },
        imgUrl: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model('Product', productSchema);
