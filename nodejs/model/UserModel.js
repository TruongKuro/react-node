const responseUtils = require("../utils/responseUtils")
const connection=require('./DBConfig')
class userModel{
    getAllUser=async()=>{
        try {
            const user= await connection.query("select * from user")
            return responseUtils.response(true,'Thành Công',user[0])
            
        } catch (error) {
            return responseUtils.response(false,'Thất bại')
        }
    }
}
module.exports=new userModel()