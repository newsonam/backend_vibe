const express = require('express');
const router = express.Router();
const { getTender,getBid, postTenderData,postBidData} = require("../controllers/tenderdata");


router.route(`/api/tenderlist`).get(getTender);
router.route(`/api/bidlist`).get(getBid);
router.route(`/api/tenderdata`).post(postTenderData);
router.route(`/api/bid/:id`).post(postBidData);



module.exports=router;