const router= require("express").Router();
const bookRoutes= require("./routes");

router.use("/books", bookRoutes);

module.exports= router;