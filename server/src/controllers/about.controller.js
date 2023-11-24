const db = require("../models");
const aboutModel = db.about;
const attachment = db.attachment;
const { Op } = require("sequelize")
const modelModule = require("../config/moduleKey");
const modkey = modelModule.ATTACHMENT_RECORD_MODULE_ABOUT_ID;

const addAbout = async (req, res) => {
    const { heading, short_desc, long_desc } = req.body;
    const file = req.file;
    const payLoad = { heading, short_desc, long_desc }
    const addAbout = await aboutModel.create(payLoad);
    const id = addAbout.dataValues.id;
    let attachmentPayloads = {
        attachment_mod_key: modkey,
        attachment_record_id: id,
        attachment_phy_path: file.filename,
        attachment_name: file.originalname
    }
    const addAttachment = await attachment.create(attachmentPayloads)

};
const about = async (req, res) => {
    const aboutDetails = await aboutModel.findAll({
        include: [{
            model: attachment,
            as: "attachmentAbout",
            where:{[Op.and]:{attachment_mod_key:modkey}}

        }]
    });
    return res.send(aboutDetails)
}
module.exports = { addAbout, about }