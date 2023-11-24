const express = require("express");
const router = express.Router();
const controller = require("../controllers/about.controller");
const { upload } = require("../utils/fileUploader")
router.post("/about/add", upload.single("about_img"), controller.addAbout);
router.get("/about/all", controller.about)


module.exports = router;