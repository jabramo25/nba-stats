module.exports = app => {
    const advancedPlayers = require("../controllers/advancedPlayer.controller.js");

    var router = require("express").Router();

    // Retrieve all Players
    router.get("/", advancedPlayers.findAll);

    // Retrieve a single Player with id
    router.get("/:id", advancedPlayers.findOne);

    app.use('/api/advancedPlayers', router);
};