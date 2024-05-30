const Router = require("express").Router;
const userController = require("../controllers/user-controller");

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);


exports.userRouter = router;
