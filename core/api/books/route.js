import { Router } from "express";
import Book from "./model.js";

const router = Router();

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfound: "No books found."}))
});

router.post('/', (req, res) => {
    console.log(req.body)
    Book.create(req.body)
        .then(book => res.json({msg: 'Book added successfully.'}))
        .catch(err => res.status(400).json({ 
            error: 'Unable to add this book',
            message: err,
            request: req.body
        }));
})

export default router;