import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Posts = mongoose.model('Post', new Schema({
	title: String,
	author: String,
	created_at: String,
	url: String
}))

export default Posts
