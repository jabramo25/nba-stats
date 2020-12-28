const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

// Retrieve all Player from the database.
exports.findAll = (req, res) => {
    const title = req.query.name;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Player.findAll({ where: condition })
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

    Player.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Player with id=" + id
            });
        });
};
