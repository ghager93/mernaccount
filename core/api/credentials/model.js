import mongoose, { Schema } from "mongoose";

const CredentialSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Credential = mongoose.model('Credential', CredentialSchema);

export default Credential;