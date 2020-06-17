const trabalhosRouter = require('express').Router({ mergeParams: true });
const flappyBirdRouter = require("./flappybirdRouter.js");

trabalhosRouter.use("/flappybird", flappyBirdRouter);

module.exports = trabalhosRouter;