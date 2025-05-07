import UserModel from "../models/UserModel.js";


export const getUserdata = async (req,res) =>{
    try{
        const FoundUser = await UserModel.findById(req.user);
        if (!FoundUser) {
            return res.status(401).json({ success: false, message: "Invalid Credentials" });
        }

        return res.status(200).json({userID:FoundUser._id,username: FoundUser.username, email: FoundUser.email, isVerified: FoundUser.isVerified });
    }
    catch(err){
        return res.status(401).json({ success: false, message: err.message });
    }
}