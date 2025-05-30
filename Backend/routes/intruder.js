
import express, { Router } from "express"
import userauthentication from "../controllers/handlesignup.js"


const router = express.Router()


router.route("/signup").post(userauthentication.handleuser)
router.route("/login").post(userauthentication.handlelogin)


export default router