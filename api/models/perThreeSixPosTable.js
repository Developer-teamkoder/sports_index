const mongoose = require('../config/db_conn')

const docSchema = new mongoose.Schema({
    season: { type: String, default: '' },
    age: { type: Number, default: 0 },
    tm: { type: String, default: '' },
    pos: { type: String, default: '' },
    g: { type: Number, default: 0 },
    gs: { type: Number, default: 0 },
    mp: { type: Number, default: 0 },
    threeP: { type: Number, default: 0 },
    threePa: { type: Number, default: 0 },
    threePPer: { type: Number, default: 0 },
    twoP: { type: Number, default: 0 },
    twoPa: { type: Number, default: 0 },
    twoPPer: { type: Number, default: 0 },
    ft: { type: Number, default: 0 },
    fta: { type: Number, default: 0 },
    ftPer: { type: Number, default: 0 },
    orb: { type: Number, default: 0 },
    drb: { type: Number, default: 0 },
    trb: { type: Number, default: 0 },
    ast: { type: Number, default: 0 },
    stl: { type: Number, default: 0 },
    blk: { type: Number, default: 0 },
    tov: { type: Number, default: 0 },
    pf: { type: Number, default: 0 },
    pts: { type: Number, default: 0 }
}, {
    timestamps: true
});

const perThreeSixPos = mongoose.model('PerThreeSixPos', docSchema);

perThreeSixPos.once('index', err => (err ? console.log("perThreeSixPos Models index error : ", err) : ''));

module.exports = perThreeSixPos;