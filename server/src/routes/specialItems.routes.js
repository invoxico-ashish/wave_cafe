const express = require("express");
const router = express.Router();
const controller = require("../controllers/specialItems.controller");
const { upload } = require("../utils/fileUploader")

router.post("/sp/item/add", upload.single("sp_img"), controller.addSpItems);
router.get("/sp/item/all", controller.spItems)
module.exports = router;