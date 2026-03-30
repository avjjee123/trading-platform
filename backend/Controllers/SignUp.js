const createToken =require("../util/SecretToken")
const UserModel=require("../model/UserMode"); 

const signup=async(req,res,next)=>{  
    try{  
        const {name,password,email}=req.body; 
        if(!name || !password || !email)
        {
          return res.json({message:"fill form",success:false}); 
        } 
        const exUser=await UserModel.findOne({email});
        if(exUser)    
        { 
          console.log("user exist"); 
          return res.json({message:"LOGIN THE USER"});  
          //navigate to login page 
        }
        const user=await UserModel.create(req.body);  
        console.log(user);    
        const token=createToken(user._id);
        res.cookie("token",token,{
          withCredentials:true, 
          httpOnly:true,       
        });   
        res.json({message:"User signed in",success:true,user});
         next();
    }catch(err)
    {  
       return res.json({message:message.err,success:false});   
    }
} 
module.exports=signup; 