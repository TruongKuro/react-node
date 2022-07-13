class ResponseUtil{
    response=(isSuccess,Message,data=[],ArrayError=[])=>{
        return {success:isSuccess,message:Message,data,error:ArrayError}
    }
}
module.exports=new ResponseUtil()