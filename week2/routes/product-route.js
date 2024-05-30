const Router = require("express").Router;
const productController = require("../controllers/product-controller");
const auth = require("../midwares/auth");
const router = Router();

router.get("/products", auth.auth, productController.getData);
router.post("/products",auth.auth, productController.addProduct);

exports.productRoute = router;
