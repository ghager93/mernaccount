import mongoose, { Schema } from "mongoose";

const LoginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Login = mongoose.model('Login', LoginSchema);

export default Login;