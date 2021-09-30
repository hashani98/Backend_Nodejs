const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const apiRouter = require("./api");
const itinRouter = require("./itinerary");
const reviewRouter = require("./review");

router.use("/user", userRouter);
//router.use("/schedule", require("./schedule"));
router.use("/apiuser", apiRouter);

router.use("/itinerary", itinRouter);

router.use("/review", reviewRouter);

module.exports = router;