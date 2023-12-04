const express = require("express");
const router = express.Router();
const controller = require("../controllers/about.controller");
const { upload } = require("../utils/fileUploader")

router.post("/about/add/attachments", upload.single("about_img_hrievac"), controller.hirevacAboutattachments);
router.post("/job/add/attachments", upload.single("job_img_hrievac"), controller.hirevacjobsattachments);
router.get("/hirevac/about/all", controller.getHirevacAboutDetails);
router.get("/hirevac/jobs/all", controller.getHirevacJobDetails);
// router.get("/about/all", controller.about)


module.exports = router;