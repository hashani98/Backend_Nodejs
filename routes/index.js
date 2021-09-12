const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const apiRouter = require("./api");
const itinRouter = require("./itinerary");

router.use("/user", userRouter);
//router.use("/schedule", require("./schedule"));
router.use("/apiuser", apiRouter);

router.use("/itinerary", itinRouter);

module.exports = router;