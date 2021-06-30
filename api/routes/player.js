var express = require('express');
var router = express.Router();
const Player = require('../models/player')

router.post('/player', (req, res) => {
    try {
        const player = new Player({
            name: req.body.name,
            image: req.body.image,
            dob: req.body.dob,
            salary: req.body.salary,
            draft: req.body.draft,
            playerNo: req.body.playerNo,
            age: req.body.age,
            bio: req.body.bio,
            height: req.body.height,
            weight: req.body.weight,
            state: req.body.state,
            city: req.body.city,
            country: req.body.country,
            about: req.body.about,
            startCarrerYear: req.body.startCarrerYear,
            currentYear: req.body.currentYear,
            endCarrerYear: req.body.endCarrerYear,
            totalgames: req.body.totalgames,
            games: req.body.games,
            pts: req.body.pts,
            reb: req.body.reb,
            asst: req.body.asst,
            twoPper: req.body.twoPper,
            threePper: req.body.threePper,
            ftPer: req.body.ftPer,
            effPer: req.body.effPer,
            chartpoints: req.body.chartpoints,
            chartrebound: req.body.chartrebound,
            chartassist: req.body.chartassist,
            chartftPer: req.body.chartftPer,
            chartthreePPer: req.body.chartthreePPer,
            rewards: req.body.rewards,
            videos: req.body.videos,
            graphPoints: req.body.graphPoints,
            graph100Points: req.body.graph100Points,
            graph36Points: req.body.graph36Points,
            graphAccuracy: req.body.graphAccuracy,
            graph100Accuracy: req.body.graph100Accuracy,
            graph36Accuracy: req.body.graph36Accuracy,
            graphVsTeams: req.body.graphVsTeams,
            graphHomeAway: req.body.graphHomeAway,
            tableSummary: req.body.tableSummary,
            tablePer100pos: req.body.tablePer100pos,
            tablePer36pos: req.body.tablePer36pos,
            tableSplits: req.body.tableSplits,
        })
        player.save()
        return res.status(200).send({
            status: 'success',
            message: 'Successfully Registered...!!',
            data: player
        })
    } catch (error) {
        return res.send({
            status: 'failed',
            message: error
        })
    }
})

module.exports = router;