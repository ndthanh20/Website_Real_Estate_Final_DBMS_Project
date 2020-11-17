const mongoose = require('mongoose');

const LandSchema = mongoose.Schema({
        TieuDe: {type: String, required: true},
        url: {type: String, required: true},
        ViTri: {type: String, required: true},
        GiaTien: {type: String, required: true},
		DienTich: {type: String, required: true},	
		HinhAnh: {type:String,require:false},
		MoTa: {type: String, required: true},
		Chudautu: {type:String,require:false},
		NgayDang: {type:String,require:true},
		DienThoai: {type:String,require:true}
})

module.exports = mongoose.model('Land',LandSchema,'Land');