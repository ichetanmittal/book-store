import express, { request, response } from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose, { Mongoose } from "mongoose";

const app = express();

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to Mern Stack Tutorial');
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT , () =>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });