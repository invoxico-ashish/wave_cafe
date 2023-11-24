const express = require("express");
const router = express.Router();
const { upload } = require("../utils/fileUploader")
const controller = require("../controllers/iceCoffee.controller");

router.post("/coffee/ice/add", upload.single("ice_coffee_img"), controller.addIcedCoffee);
router.get("/coffee/ice/list", controller.icedCoffeeList)

module.exports = router