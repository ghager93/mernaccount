import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
})

const Book = mongoose.model('book', BookSchema);

export default Book;