import express from 'express';
import Authrouter from './routes/AuthRoutes.js'
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import DBconnect from "./db/MongoDBconnection.js";
import UserRouter from "./routes/UserRoutes.js";


dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth',Authrouter);
app.use('/api/user',UserRouter);


app.get("/",(req,res)=>{
    res.json({message:"Hello World"})
})

app.listen(process.env.PORT || 4000, async ()=>{
    try{
        await DBconnect();
        console.log("Server started on port: " + process.env.PORT);
    }
    catch(err){
        console.log(err.message);
    }
});