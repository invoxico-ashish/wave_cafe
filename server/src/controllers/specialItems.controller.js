const db = require("../models");
const spModel = db.spItems;
const attachment = db.attachment;
const { Op } = require("sequelize")
const modelModule = require("../config/moduleKey");
const modkey = modelModule.ATTACHMENT_RECORD_MODULE_SPECIAL_ITEMS_ID;

const addSpItems = async (req, res) => {
    const { sp_title, sp_desc } = req.body;
    console.log(req.body)
    const file = req.file;
    const payload = { sp_title, sp_desc };
    try {
        const add = await spModel.create(payload);
        console.log(add.dataValues.sp_id)
        const attPayload = {
            attachment_mod_key: modkey,
            attachment_record_id: add.dataValues.sp_id,
            attachment_phy_path: file.filename,
            attachment_name: file.originalname
        }
        const addAtachments = await attachment.create(attPayload)

    } catch (error) {
        console.log(error)
    }

}
const spItems = async (req, res) => {
    const items = await spModel.findAll({
        include: [{
            model: attachment,
            as: "attachmentspecial",
            where: { [Op.and]: { attachment_mod_key: modkey } }
        }]
    });
    return res.send(items);
}

module.exports = { addSpItems, spItems }