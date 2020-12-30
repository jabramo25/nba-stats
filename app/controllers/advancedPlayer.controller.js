const db = require("../models");
const AdvancedPlayer = db.advancedPlayers;
const Op = db.Sequelize.Op;
const _ = require("lodash");

// Retrieve all Player from the database.
exports.findAll = (req, res) => {
    let whereCondition = {};
    let attributes = req.body && req.body.attributes;
    console.log(req.body.filters)
    if (req.body && req.body.filters) {
        _.each(req.body.filters, (filter) => {
            whereCondition[filter.field] = { [Op[filter.operator]]: filter.value };
        })
    }
    AdvancedPlayer.findAll({ attributes: attributes, where: whereCondition, order: [['YEAR', 'DESC'], ['PTS', 'DESC']] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Player."
            });
        });
};

// Find a single Player with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    AdvancedPlayer.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Player with id=" + id
            });
        });
};
