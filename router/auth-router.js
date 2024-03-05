const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controllers')
const validate = require("../middlewares/auth-middleware")
const {signUpSchema,loginSchema} = require("../validators/auth-validation");
const userAuthantication = require('../middlewares/userAuth-middleware');

// router.get("/",(req,res)=>{
//     res.status(200).send("Hello i am in home router")
// })

router.route("/").get(authController.home)

router.route("/register").post(validate(signUpSchema),authController.register)

router.route("/login").post(validate(loginSchema),authController.login)

router.route("/user").get(userAuthantication,authController.user)

module.exports = router;