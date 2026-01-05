import express, { Router } from "express"
import userauthentication from "../controllers/handlesignup.js"
import validation from "../middlewares/Joi.auth.js"
import sendMail from "../controllers/sendMail.js"


const router = express.Router()


router.route("/signup").post( validation.handleSignupAuth,userauthentication.handleuser)
router.route("/login").post(validation.handleloginAuth, userauthentication.handlelogin)

router.route("/send-mail").post(sendMail.sendMail)


export default router