const Router = require("express").Router
const userController = require('../controllers/product-controller')

const router = Router()


router.get('/products', userController.getData )
router.get('/products', userController.getData )



exports.productRoute =  router