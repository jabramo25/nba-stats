module.exports = (sequelize, Sequelize) => {
    const AdvancedPlayer = sequelize.define("advancedPlayer", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        Year: {
            type: Sequelize.INTEGER
        },
        Player: {
            type: Sequelize.STRING
        },
        Pos: {
            type: Sequelize.STRING
        },
        Age: {
            type: Sequelize.INTEGER
        },
        Tm: {
            type: Sequelize.STRING
        },
        G: {
            type: Sequelize.INTEGER
        },
        GS: {
            type: Sequelize.INTEGER
        },
        MP: {
            type: Sequelize.INTEGER
        },
        PER: {
            type: Sequelize.DOUBLE
        },
        TSpct: {
            type: Sequelize.DOUBLE
        },
        ThreePAr: {
            type: Sequelize.DOUBLE
        },
        FTr: {
            type: Sequelize.DOUBLE
        },
        ORBpct: {
            type: Sequelize.DOUBLE
        },
        DRBpct: {
            type: Sequelize.DOUBLE
        },
        TRBpct: {
            type: Sequelize.DOUBLE
        },
        ASTpct: {
            type: Sequelize.DOUBLE
        },
        STLpct: {
            type: Sequelize.DOUBLE
        },
        BLKpct: {
            type: Sequelize.DOUBLE
        },
        TOVpct: {
            type: Sequelize.DOUBLE
        },
        USGpct: {
            type: Sequelize.DOUBLE
        },
        blanl: {
            type: Sequelize.STRING
        },
        OWS: {
            type: Sequelize.DOUBLE
        },
        DWS: {
            type: Sequelize.DOUBLE
        },
        WS: {
            type: Sequelize.DOUBLE
        },
        WSper48: {
            type: Sequelize.DOUBLE
        },
        blank2: {
            type: Sequelize.INTEGER
        },
        OBPM: {
            type: Sequelize.DOUBLE
        },
        DBPM: {
            type: Sequelize.DOUBLE
        },
        BPM: {
            type: Sequelize.DOUBLE
        },
        VORP: {
            type: Sequelize.DOUBLE
        },
        FG: {
            type: Sequelize.INTEGER
        },
        FGA: {
            type: Sequelize.INTEGER
        },
        FGpct: {
            type: Sequelize.INTEGER
        },
        ThreeP: {
            type: Sequelize.INTEGER
        },
        ThreePA: {
            type: Sequelize.INTEGER
        },
        ThreePpct: {
            type: Sequelize.DOUBLE
        },
        TwoP: {
            type: Sequelize.INTEGER
        },
        TwoPA: {
            type: Sequelize.INTEGER
        },
        TwoPpct: {
            type: Sequelize.DOUBLE
        },
        eFGpct: {
            type: Sequelize.DOUBLE
        },
        FT: {
            type: Sequelize.INTEGER
        },
        FTA: {
            type: Sequelize.INTEGER
        },
        FTpct: {
            type: Sequelize.DOUBLE
        },
        ORB: {
            type: Sequelize.INTEGER
        },
        DRB: {
            type: Sequelize.INTEGER
        },
        TRB: {
            type: Sequelize.INTEGER
        },
        AST: {
            type: Sequelize.INTEGER
        },
        STL: {
            type: Sequelize.INTEGER
        },
        BLK: {
            type: Sequelize.INTEGER
        },
        TOV: {
            type: Sequelize.INTEGER
        },
        PF: {
            type: Sequelize.INTEGER
        },
        PTS: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return AdvancedPlayer;
};