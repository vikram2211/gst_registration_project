const mongoose = require('mongoose');
const serviceModel = require('../models/servicesModel');
const userModel = require('../models/userModel')



const serviceData = async function (req, res) {
    let data = req.body;

    if (!(data.GST_Return_Monthly || data.GST_Return_Quarterly || data.GST_Return_Half_yearly || data.GST_Return_Annually || data.GST_Activation || data.GST_Cancellation || data.GST_Modification || data.Change_of_Constitution || data.GST_Refund)) {
        return res.status(400).send({ status: false, message: "please select any field" });
    }

    const servicesData = await serviceModel.create(data);
    return res.status(200).send({ status: true, data: servicesData });
}


const getData = async function (req, res) {
    const input = req.body;
    const serviceData = await serviceModel.find({ userId: input.userId });
    const userData = await userModel.find({ userId: input.userId });

    const allData = serviceData + userData;

    return res.status(200).send({ status: true, data: allData })
}


module.exports.serviceData = serviceData;
module.exports.getData = getData;