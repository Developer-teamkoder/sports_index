var express = require('express');
var router = express.Router();
const Player = require('../models/player')
const Summary = require('../models/summaryTable')
const P1 = require('../models/perHunPosTable')
const P3 = require('../models/perThreeSixPosTable')
const S = require('../models/splitsTable')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Player
    .find()
    .populate('tableSummary')
    .populate('tablePer100pos')
    .populate('tablePer36pos')
    .populate('tableSplits')
    .then((data) => {
      // let a = []
      // for (let i of data) {
      //   a.push(i._id)
      // }
      res.status(200).send({
        status: "success",
        data: data,
      })
      // l: a.length,
    })
    .catch(err => {
      res.status(400).send({
        status: "failed",
        message: err
      })
    })
});

router.post('/', (req, res) => {
  try {
    const player = new Player({
      name: req.body.name,
      age: req.body.age,
    })
    player.save()
    return res.status(200).send({
      status: 'success',
      message: 'Successfully Registered...!!'
    })
  } catch (error) {
    return res.send({
      status: 'failed',
      message: error
    })
  }
})


router.delete('/', (req, res) => {
  Player
    .remove()
    .then(() => {
      res.status(200).send({
        status: "success",
        message: "Successfully Deleted."
      })
    })
    .catch(err => {
      res.status(400).send({
        status: "failed",
        message: err
      })
    })
})

module.exports = router;
