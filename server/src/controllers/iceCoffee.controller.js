const db = require("../models");
const icedCoffee = db.icedCoffee;
const attachment = db.attachment;
const { Op } = require("sequelize")
const modelModule = require("../config/moduleKey");
const modkeyice = modelModule.ATTACHMENT_RECORD_MODULE_ICE_COFEE_ID

const addIcedCoffee = async (req, res) => {
    const { title, description, price } = req.body;
    console.log(req.body)
    const file = req.file;

    const icePayloads = { title, description, price };
    const addCoffee = await icedCoffee.create(icePayloads);
    const recordId = addCoffee.dataValues.id
    const attchPayloads = {
        attachment_mod_key: 3,
        attachment_record_id: recordId,
        attachment_phy_path: file.filename,
        attachment_name: file.originalname
    };
    const addAttachments = await attachment.create(attchPayloads);
    return res.send
};
const icedCoffeeList = async (req, res) => {
    const coffee = await icedCoffee.findAll({
        include: [
            {
                model: attachment,
                as: "attachments",
                // where: { [Op.and]: { attachment_mod_key: modkey } }
            }
        ]
    });
    res.send(coffee)
}
module.exports = { addIcedCoffee, icedCoffeeList }