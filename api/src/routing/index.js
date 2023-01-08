const { Router } = require("express");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const toppingsRouter = require("./routes/toppingsRouter");
const usersRouter = require("./routes/usersRouter");

const router = Router();

router.use("/products", productRouter);
router.use("/categorys", categoryRouter);
router.use("/toppings", toppingsRouter);
router.use("/users", usersRouter);

module.exports = router;