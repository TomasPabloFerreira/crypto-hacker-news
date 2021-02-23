import express from 'express'
import PostsUpdater from '../services/PostsUpdater'
import { Posts } from '../entities'

const router = express.Router()

router.get('/', (req, res) => {
	Posts.find({ isDeleted: false }).exec().then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
	Posts
		.create(req.body)
		.then(x => res.status(201).send(x))
})

router.put('/', async (req, res) => {
	const result: Boolean = await PostsUpdater()
	if(result) res.status(204).send()
	else res.status(400).send()
})

router.delete('/', (req, res) => {
	try {
		if(!req.body._id) throw new Error()
		Posts
			.updateOne({ _id: req.body._id }, { isDeleted: true })
			.then(x => res.status(204).send())
	} catch (e) {
		res.status(400).send()
	}
})

export default router
