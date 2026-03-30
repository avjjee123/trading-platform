const bcrypt=require("bcrypt");   

const {Schema}=require("mongoose");

const UserSchema=new Schema({
    name:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now, 
    },
});
 
UserSchema.pre("save",async function(){
    this.password=await bcrypt.hash(this.password,12);
})
 
module.exports=UserSchema;  