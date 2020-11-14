const mongoose = require('mongoose');

const HouseSchema = mongoose.Schema({
        title: {type: String, required: true},
        url: {type: String, required: true},
        Location: {type: String, required: true},
        Price: {type: String, required: true},
		Area: {type: String, required: true},
		MatTien : {type:String,require:false},
		DuongVao: {type:String,require:false},
		SoTang : {type:String,require:false},	
		NumberBed : {type:String,require:false},
		NumberToilet : {type:String,require:false},
		Image: {type:String,require:false},
		Description: {type: String, required: true},
		Investor: {type:String,require:false},
		timePost: {type:String,require:true},
		Phone: {type:String,require:true}
})

module.exports = mongoose.model('House',HouseSchema,'House');