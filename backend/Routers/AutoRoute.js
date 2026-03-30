const signup = require("../Controllers/SignUp");
const login = require("../Controllers/login");
const verifiction = require("../Controllers/verifiction");
const router=require("express").Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/',verifiction); 

module.exports=router;