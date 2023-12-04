const db = require("../models");
const aboutModel = db.about;
const attachment = db.attachment;
const hirevacabout = db.hirevacAbout;
const hirevacjob = db.hirevacJob;
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
            where: { [Op.and]: { attachment_mod_key: modkey } }

        }]
    });
    return res.send(aboutDetails)
};



const hirevacAboutattachments = async (req, res) => {
    const file = req.file;
    console.log(file)
    const path = file.filename;
    const name = file.originalname;
    const payload = {
        attachment_mod_key: 6,
        attachment_record_id: 2,
        attachment_phy_path: path,
        attachment_name: name
    }
    const add = await attachment.create(payload)
    return res.send(add)

};
const getHirevacAboutDetails = async (req, res) => {
    try {
        const details = await hirevacabout.findAll({
            include: [{
                model: attachment,
                as: "hirevacaboutattachments",
                where: { attachment_mod_key: 6 }
            }]
        })
        return res.send(details);
    } catch (error) {
        console.log(error)
    }
};
const hirevacjobsattachments = async (req, res) => {
    const file = req.file;
    console.log(file)
    const path = file.filename;
    const name = file.originalname;
    const payload = {
        attachment_mod_key: 7,
        attachment_record_id: 6,
        attachment_phy_path: path,
        attachment_name: name
    }
    const add = await attachment.create(payload)
    return res.send(add)

};
const getHirevacJobDetails = async (req, res) => {
    try {
        const details = await hirevacjob.findAll({
            include: [{
                model: attachment,
                as: "hirevacjobattachments",
                where: { attachment_mod_key: 7 }
            }]
        });
        return res.send(details);
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getHirevacJobDetails, addAbout, about, hirevacAboutattachments, getHirevacAboutDetails, hirevacjobsattachments }