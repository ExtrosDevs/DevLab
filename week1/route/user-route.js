const Router = require("express").Router
const userController = require('../controllers/user-controller')

const router = Router()


router.post('/auth', userController.register )


exports.userRouter =  router