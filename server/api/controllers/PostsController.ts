import express from 'express'
import PostsUpdater from '../services/PostsCreator'
import { AlgoliaPostsType } from '../types'
import { Posts } from '../entities'

const router = express.Router()

router.get('/', (req, res) => {
	Posts.find().exec().then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
	Posts
		.create(req.body)
		.then(x => res.status(201).send(x))
})

router.put('/', (req: AlgoliaPostsType[], res) => {
	const result: Boolean = PostsUpdater(req)
	if(result) res.status(204).send()
	else res.status(400).send()
})

export default router
