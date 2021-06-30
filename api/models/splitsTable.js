const mongoose = require('../config/db_conn')

const docSchema = new mongoose.Schema({
    dayOrTeam: { type: String, default: '' },
    g: { type: Number, default: 0 },
    min: { type: String, default: '' },
    fgm: { type: Number, default: 0 },
    fga: { type: Number, default: 0 },
    fgPer: { type: Number, default: 0 },
    threePm: { type: Number, default: 0 },
    threePa: { type: Number, default: 0 },
    threePPer: { type: Number, default: 0 },
    ftm: { type: Number, default: 0 },
    fta: { type: Number, default: 0 },
    ftPer: { type: Number, default: 0 },
    or: { type: Number, default: 0 },
    dr: { type: Number, default: 0 },
    reb: { type: Number, default: 0 },
    ast: { type: Number, default: 0 },
    to: { type: Number, default: 0 },
    stl: { type: Number, default: 0 },
    blk: { type: Number, default: 0 },
    pf: { type: Number, default: 0 },
    pts: { type: Number, default: 0 },
    twoPts: { type: Number, default: 0 }
}, {
    timestamps: true
});

const splits = mongoose.model('Splits', docSchema);

splits.once('index', err => (err ? console.log("Splits Models index error : ", err) : ''));

module.exports = splits;