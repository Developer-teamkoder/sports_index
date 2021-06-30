var express = require('express');
var router = express.Router();
const Summary = require('../models/summaryTable')
const PerHunPosTable = require('../models/perHunPosTable')
const PerThreeSixPosTable = require('../models/perThreeSixPosTable')
const Splits = require('../models/splitsTable')

router.get('/summary', function (req, res, next) {
    Summary
        .find()
        .then((data) => {
            res.status(200).send({
                status: "success",
                data: data
            })
        })
        .catch(err => {
            res.status(400).send({
                status: "failed",
                message: err
            })
        })
});

router.post('/summary', (req, res) => {
    try {
        const summary = new Summary({
            season: req.body.season,
            age: req.body.age,
            tm: req.body.tm,
            pos: req.body.pos,
            g: req.body.g,
            gs: req.body.gs,
            mp: req.body.mp,
            fg: req.body.fg,
            fga: req.body.fga,
            fgPer: req.body.fgPer,
            threeP: req.body.threeP,
            threePa: req.body.threePa,
            threePPer: req.body.threePPer,
            efgPer: req.body.efgPer,
            ft: req.body.ft,
            fta: req.body.fta,
            ftPer: req.body.ftPer,
            orb: req.body.orb,
            drb: req.body.drb,
            trb: req.body.trb,
            ast: req.body.ast,
            stl: req.body.stl,
            blk: req.body.blk,
            tov: req.body.tov,
            pf: req.body.pf,
            pts: req.body.pts
        })
        summary.save()
        return res.status(200).send({
            status: 'success',
            message: 'Successfully Registered...!!',
            data: summary
        })
    } catch (error) {
        return res.send({
            status: 'failed',
            message: error
        })
    }
})

router.post('/perHunPos', (req, res) => {
    try {
        const perHunPosTable = new PerHunPosTable({
            season: req.body.season,
            age: req.body.age,
            tm: req.body.tm,
            pos: req.body.pos,
            g: req.body.g,
            gs: req.body.gs,
            mp: req.body.mp,
            threeP: req.body.threeP,
            threePa: req.body.threePa,
            threePPer: req.body.threePPer,
            twoP: req.body.twoP,
            twoPa: req.body.twoPa,
            twoPPer: req.body.twoPPer,
            ft: req.body.ft,
            fta: req.body.fta,
            ftPer: req.body.ftPer,
            orb: req.body.orb,
            drb: req.body.drb,
            trb: req.body.trb,
            ast: req.body.ast,
            stl: req.body.stl,
            stl: req.body.stl,
            blk: req.body.blk,
            tov: req.body.tov,
            pf: req.body.pf,
            pts: req.body.pts,
        })
        perHunPosTable.save()
        return res.status(200).send({
            status: 'success',
            message: 'Successfully Registered...!!',
            data: perHunPosTable
        })
    } catch (error) {
        return res.send({
            status: 'failed',
            message: error
        })
    }
})

router.post('/perThreeSixPos', (req, res) => {
    try {
        const perThreeSixPosTable = new PerThreeSixPosTable({
            season: req.body.season,
            age: req.body.age,
            tm: req.body.tm,
            pos: req.body.pos,
            g: req.body.g,
            gs: req.body.gs,
            mp: req.body.mp,
            threeP: req.body.threeP,
            threePa: req.body.threePa,
            threePPer: req.body.threePPer,
            twoP: req.body.twoP,
            twoPa: req.body.twoPa,
            twoPPer: req.body.twoPPer,
            ft: req.body.ft,
            fta: req.body.fta,
            ftPer: req.body.ftPer,
            orb: req.body.orb,
            drb: req.body.drb,
            trb: req.body.trb,
            ast: req.body.ast,
            stl: req.body.stl,
            blk: req.body.blk,
            tov: req.body.tov,
            pf: req.body.pf,
            pts: req.body.pts,
        })
        perThreeSixPosTable.save()
        return res.status(200).send({
            status: 'success',
            message: 'Successfully Registered...!!',
            data: perThreeSixPosTable
        })
    } catch (error) {
        return res.send({
            status: 'failed',
            message: error
        })
    }
})

router.post('/splits', (req, res) => {
    try {
        const splits = new Splits({
            dayOrTeam: req.body.dayOrTeam,
            g: req.body.g,
            min: req.body.min,
            fgm: req.body.fgm,
            fga: req.body.fga,
            fgPer: req.body.fgPer,
            threePm: req.body.threePm,
            threePa: req.body.threePa,
            threePPer: req.body.threePPer,
            ftm: req.body.ftm,
            fta: req.body.fta,
            ftPer: req.body.ftPer,
            or: req.body.or,
            dr: req.body.dr,
            reb: req.body.reb,
            ast: req.body.ast,
            to: req.body.to,
            stl: req.body.stl,
            blk: req.body.blk,
            pf: req.body.pf,
            pts: req.body.pts,
        })
        splits.save()
        return res.status(200).send({
            status: 'success',
            message: 'Successfully Registered...!!',
            data: splits
        })
    } catch (error) {
        return res.send({
            status: 'failed',
            message: error
        })
    }
})

module.exports = router;