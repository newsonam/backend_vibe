require('../db/connection.js');
require("dotenv").config();
const Tender = require('../model/tenderSchema.js');
const Bid = require('../model/bidSchema.js');


const getTender = (req, res) => {

    Tender.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {

            console.log({ data: data }, data);
            res.status(200).json({ data: data });
        }
    });

};

const getBid = (req, res) => {

    Bid.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {

            console.log({ data: data }, data);
            res.status(200).json({ data: data });
        }
    });

};

const postTenderData = async (req, res) => {
    console.log(req.body);
    const { tenderName, description, startTime, endTime, bufferTime } = req.body;
    if (!tenderName || !description || !startTime || !endTime || !bufferTime) {
        return res.status(422).json({ error: "plz fill all filled" });
    }

    const tendernewdata = new Tender({ tenderName, description, startTime, endTime, bufferTime })
    const tenderresult = await tendernewdata.save();
    if (tenderresult) {
        return res.status(201).json({ message: "Tender Data Posted" });
    }
};

const postBidData = async (req, res) => {
    console.log(req.params.id);
    const tenderId=req.params.id;
    const { companyName, bidTime, bidCost, bidDate, flag } = req.body;
    if (!companyName || !bidTime || !bidCost || !bidDate || !flag || !tenderId) {
        return res.status(422).json({ error: "plz fill all filled" });
    }

    const biddata = new Bid({ companyName, bidTime, bidCost, bidDate, flag,tenderId })
    const bidresult = await biddata.save();
    if (bidresult) {
        return res.status(201).json({ message: "Bid Data Posted" });
    }
};



module.exports = { getTender,getBid, postTenderData, postBidData };


