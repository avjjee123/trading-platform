const createToken =require("../util/SecretToken")
const bcrypt=require("bcrypt"); 
const UserModel =require("../model/UserMode"); 

const login=async(req,res,next)=>{
    try{
      const {email,password}=req.body;
      if(!email || !password)
      {
        return res.json({message:"fill the form properly",success:false}); 
      }
      const user=await UserModel.findOne({email});  
      if(!user)
      {
        return res.json({message:"your email is wrong",success:false}); 
      }
      const term=await bcrypt.compare(password,user.password); 
      if(!term)
      { 
        return res.json({message:"your password is wrong",success:false}); 
      }
      const token=createToken(user._id); 
      res.cookie("token",token,{
          withCredentials:true, 
          httpOnly:true,      
        }); 

      res.json({message:"you successfully login",success:true,user});  
      next(); 
    }catch(err)
    {
       return res.json({message:err.message,success:false});  
    }
}
module.exports=login; 