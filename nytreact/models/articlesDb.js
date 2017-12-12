const mongoose = require("mongoose");

const Schema = mongoose.Schema,
		ObjectId = mongoose.ObjectId;

const ArticleSchema = new Schema({
	title: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		require:true
	},
	url:{
		type: String,
		require: true
	}

}); 

const Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles; 

