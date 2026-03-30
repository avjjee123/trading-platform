require("dotenv").config();

const jwt=require("jsonwebtoken");

function createToken(id){
    return jwt.sign({id},process.env.TOKEN_KEY,{
        expiresIn:"3d", 
    });
};  

module.exports=createToken;