const mongoose = require('../config/db_conn')

const docSchema = new mongoose.Schema({
	name: {
		type: String,
		default: ''
	},
	image: {
		type: String,
		default: ''
	},
	dob: {
		type: String,
		default: ''
	},
	draft: {
		type: String,
		default: ''
	},
	playerNo: {
		type: String,
		default: ''
	},
	age: {
		type: String,
		default: ''
	},
	bio: {
		type: String,
		default: ''
	},
	height: {
		type: String,
		default: ''
	},
	weight: {
		type: String,
		default: ''
	},
	state: {
		type: String,
		default: ''
	},
	city: {
		type: String,
		default: ''
	},
	country: {
		type: String,
		default: ''
	},
	about: {
		type: String,
		default: ''
	},
	startCarrerYear: {
		type: String,
		default: ''
	},
	currentYear: {
		type: String,
		default: ''	
	},
	endCarrerYear: {
		type: String,
		default: ''
	},
	salary: {
		type: Number,
		default: 0
	},
	totalgames: {
		type: Number,
		default: 0
	},
	games: {
		type: Number,
		default: 0
	},
	pts: {
		type: Number,
		default: 0
	},
	reb: {
		type: Number,
		default: 0
	},
	asst: {
		type: Number,
		default: 0
	},
	twoPper: {
		type: Number,
		default: 0
	},
	threePper: {
		type: Number,
		default: 0
	},
	ftPer: {
		type: Number,
		default: 0
	},
	effPer: {
		type: Number,
		default: 0
	},
	videos: [{
		title: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		},
		poster: {
			type: String,
			default: ""
		}
	}],
	rewards: {
		type: [String],
		default: []
	},
	chartpoints: {
		type: [Number],
		default: []
	},
	chartrebound: {
		type: [Number],
		default: []
	},
	chartassist: {
		type: [Number],
		default: []
	},
	chartftPer: {
		type: [Number],
		default: []
	},
	chartthreePPer: {
		type: [Number],
		default: []
	},
	graphPoints: {
		games: {
			type: Number,
			default: 0
		},
		pts: {
			type: Number,
			default: 0
		},
		twoPts: {
			type: Number,
			default: 0
		},
		threePts: {
			type: Number,
			default: 0
		},
		ft: {
			type: Number,
			default: 0
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoPtsData: {
			type: [Number],
			default: []
		},
		threePtsData: {
			type: [Number],
			default: []
		},
	},
	graph100Points: {
		games: {
			type: Number,
			default: 0
		},
		pts: {
			type: Number,
			default: 0
		},
		twoPts: {
			type: Number,
			default: 0
		},
		threePts: {
			type: Number,
			default: 0
		},
		ft: {
			type: Number,
			default: 0
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoPtsData: {
			type: [Number],
			default: []
		},
		threePtsData: {
			type: [Number],
			default: []
		},
	},
	graph36Points: {
		games: {
			type: Number,
			default: 0
		},
		pts: {
			type: Number,
			default: 0
		},
		twoPts: {
			type: Number,
			default: 0
		},
		threePts: {
			type: Number,
			default: 0
		},
		ft: {
			type: Number,
			default: 0
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoPtsData: {
			type: [Number],
			default: []
		},
		threePtsData: {
			type: [Number],
			default: []
		},
	},
	graphAccuracy: {
		games: {
			type: Number,
			default: 0
		},
		twoPts: {
			type: Number,
			default: 0
		},
		threePts: {
			type: Number,
			default: 0
		},
		ft: {
			type: Number,
			default: 0
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoPtsData: {
			type: [Number],
			default: []
		},
		threePtsData: {
			type: [Number],
			default: []
		},
	},
	graph100Accuracy: {
		games: {
			type: Number,
			default: 0
		},
		twoPts: {
			type: Number,
			default: 0
		},
		threePts: {
			type: Number,
			default: 0
		},
		ft: {
			type: Number,
			default: 0
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoPtsData: {
			type: [Number],
			default: []
		},
		threePtsData: {
			type: [Number],
			default: []
		},
	},
	graph36Accuracy: {
		games: {
			type: Number,
			default: 0
		},
		twoPts: {
			type: Number,
			default: 0
		},
		threePts: {
			type: Number,
			default: 0
		},
		ft: {
			type: Number,
			default: 0
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoPtsData: {
			type: [Number],
			default: []
		},
		threePtsData: {
			type: [Number],
			default: []
		},
	},
	graphVsTeams: {
		season: {
			type: [String],
			default: []
		},
		ftData: {
			type: [Number],
			default: []
		},
		fgData: {
			type: [Number],
			default: []
		},
		threePData: {
			type: [Number],
			default: []
		},
	},
	graphHomeAway: {
		season: {
			type: [String],
			default: []
		},
		ftData: {
			type: [Number],
			default: []
		},
		twoFpData: {
			type: [Number],
			default: []
		},
		threeFpData: {
			type: [Number],
			default: []
		},
		ftData2: {
			type: [Number],
			default: []
		},
		threePper: {
			type: [Number],
			default: []
		},
		twoPper: {
			type: [Number],
			default: []
		},
	},
	tableSummary: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Summary'
	}],
	tablePer100pos: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'PerHunPos'
	}],
	tablePer36pos: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'PerThreeSixPos'
	}],
	tableSplits: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Splits'
	}]
}, {
	timestamps: true
});

const player = mongoose.model('Player', docSchema);

player.once('index', err => (err ? console.log("Player Models index error : ", err) : ''));

module.exports = player;
