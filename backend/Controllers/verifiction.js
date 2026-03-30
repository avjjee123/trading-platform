const createToken =require("../util/SecretToken")
const UserModel=require("../model/UserMode"); 
const jwt=require("jsonwebtoken"); 
require("dotenv").config(); 
 
const verifiction=async(req,res,next)=>{ 
    
    try{
      const token=req.cookies.token; 
      console.log(token);
       if(!token)  
       {
          return res.json({message:"token not exist"}); 
       }
       jwt.verify(token,process.env.TOKEN_KEY,async(err,data)=>{
        if(err)
        {
           return res.json({message:"token is incorrect"}); 
        }
        else{
          const user=await UserModel.findById(data.id);  
          if(!user) { 
            return res.json({message:"user not matched"});
            } 
            res.json({success:true,message:"token exist"})
              next();
             }  })
          
    }catch(err)
    {
        console.log(err.message); 
        res.json({message:err.message}); 
    }
}
module.exports=verifiction;  