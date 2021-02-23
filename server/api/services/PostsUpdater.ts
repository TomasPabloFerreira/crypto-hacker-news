import { AlgoliaPostsType } from '../types'
import { AlgoliaPostsGetter } from '.'
import AllPostsEliminator from './AllPostsEliminator'
import { Posts } from '../entities'
import AlgoliaPostsToPostsMapper from '../mappers/AlgoliaPostsToPosts'

const PostsUpdater = async (): Promise<Boolean> => {
	const algoliaPosts = await AlgoliaPostsGetter()
	await AllPostsEliminator({ isDeleted: false })
	const softDeleted = await Posts.find({ isDeleted: true })
	const softDeletedIds = softDeleted.map(x => x['objectID'])
	const newPosts = algoliaPosts
		.filter(x => !softDeletedIds.includes(x.objectID))
		.map(AlgoliaPostsToPostsMapper)
	await Posts.create(newPosts)
	return true
}

export default PostsUpdater
