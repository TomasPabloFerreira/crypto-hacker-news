import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Posts = mongoose.model('Post', new Schema({
	_id: String,
	title: String,
	author: String,
	created_at: Date,
	url: String
}))

module.exports = Posts
