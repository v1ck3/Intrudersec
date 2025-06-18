import joi from "joi"

const handleSignupAuth = (req, res , next)=>{
    const schema =joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required()
})
const {error}= schema.validate(req.body);
if (error) {
    res.status(400).json({message:"Bad Request", error})   
}
  next();
}


const handleloginAuth = (req, res , next)=>{
    const schema =joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required()
})
const {error}= schema.validate(req.body);
if (error) {
    res.status(400).json({message:"Bad Request", error})   
}
   next()
}




export default {
    handleSignupAuth,
    handleloginAuth
}