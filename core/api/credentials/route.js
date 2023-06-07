import { Router } from "express";
import Credential from "./model.js";

import bcrypt from "bcrypt";

const saltRounds = 10;

const router = Router();

router.post('/', (req, res) => {
    console.log(req.body);
    bcrypt
        .hash(req.body.password, saltRounds)
        .then(hash => {
            const newCreds = new Credential({
                username: req.body.username,
                password: hash
            })

            Credential
                .create(newCreds)
                .then(creds => res.json({msg: 'New credentials added.'}))
                .catch(err => res.status(400).json({ 
                    error: 'Unable to add these credentials.',
                    message: err,
                    request: req.body
                }));
        });
});

router.get('/')

export default router;