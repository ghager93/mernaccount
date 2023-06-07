import { Router } from "express";
import Credential from "../credentials/model.js";

const router = new Router();

router.post('/', (req, res) => {
    Credential.findOne({username: req.body.username})
        .then(cred => console.log(cred))
        .catch(err => res.json({msg: "Could not find user."}))
})

export default router;