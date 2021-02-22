import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AlgoliaPosts = mongoose.model('AlgoliaPost', new Schema({
	"created_at": String,
	"title": String,
	"url": String,
	"author": String,
	"points": {},
	"story_text": String,
	"comment_text": String,
	"num_comments": {},
	"story_id": {},
	"story_title": String,
	"story_url": String,
	"parent_id": {},
	"created_at_i": {},
	"_tags": [String], 
	"objectID": {},
	"_highlightResult": {
		"author": {
			"value": String,
			"matchLevel": String,
			"matchedWords": [{}]
		},
		"comment_text": {
			"value": String,
			"matchLevel": String,
			"fullyHighlighted": Boolean,
			"matchedWords": [String]
		},
		"story_title": {
			"value": String,
			"matchLevel": String,
			"matchedWords": [{}]
		},
		"story_url": {
			"value": String,
			"matchLevel": String,
			"matchedWords": [{}]
		}
	}
}))

module.exports = AlgoliaPosts
