import express from "express";
import {getUserdata} from "../controllers/userController.js";
import LoggedIn from "../middlewares/Authuser.js";

const UserRouter = express.Router();


UserRouter.get("/getUserdata",LoggedIn,getUserdata);

export default UserRouter;