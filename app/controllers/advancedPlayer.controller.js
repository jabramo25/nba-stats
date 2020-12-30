const db = require("../models");
const AdvancedPlayer = db.advancedPlayers;
const Op = db.Sequelize.Op;
const _ = require("lodash");

// Retrieve all Player from the database.
exports.findAll = (req, res) => {
    debugger;
    console.log(req.body);
    let whereCondition = {};
    if (req.body && req.body.length) {
        _.each(req.body, (filter) => {
            whereCondition[filter.field] = { [Op[filter.operator]]: filter.value };
        })
    }
    console.log(whereCondition);

    //console.log(res);
    //const title = req.query.name;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    AdvancedPlayer.findAll({ where: whereCondition, order: [['YEAR', 'DESC'], ['PTS', 'DESC']] })
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
