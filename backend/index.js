import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
    origin:true,
    credentials:true
}

//database  connection
mongoose.set('strictQuery', false);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Database successfully connected');
    } catch (err) {
        console.log('failed to connect to database ');
    };
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);

app.listen(port, ()=>{
    connect();
    console.log('server listening to port', port);
});