const express= require("express");
const router= express.Router();
const Controller= require("../../controllers/bookController");


router.route("/")
    .get(Controller.findAll)
    .post(Controller.create);

router.route("/:id")
    .delete(Controller.remove);


module.exports = router;