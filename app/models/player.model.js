module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
        name: {
            type: Sequelize.STRING
        },
        year_start: {
            type: Sequelize.INTEGER
        },
        year_end: {
            type: Sequelize.INTEGER
        },
        position: {
            type: Sequelize.STRING
        },
        height: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.INTEGER
        },
        birth_date: {
            type: Sequelize.STRING
        },
        college: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return Player;
};