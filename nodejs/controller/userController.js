const UserModel = require("../model/UserModel")

class userController {
    getAll=async(req,res)=>{
        const response=await UserModel.getAllUser()
        res.json(response)
    }
}
module.exports=new userController()