const express = require("express");

const { userRouter } = require("./route/user-route");
const { productRoute } = require("./route/product-route");

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use(productRoute);

app.get("/", (req, res) => {
  return res.json({ message: "The server running in port 3000" });
});
app.listen(3000, () => {
  console.log("The server running in port 3000...");
});
