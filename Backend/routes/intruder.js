
import express, { Router } from "express"
import userauthentication from "../controllers/handlesignup.js"
import validation from "../middlewares/Joi.auth.js"


const router = express.Router()


router.route("/signup").post( validation.handleSignupAuth,userauthentication.handleuser)
router.route("/login").post(validation.handleloginAuth, userauthentication.handlelogin)


export default router