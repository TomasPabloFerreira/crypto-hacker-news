import { AlgoliaPostsType } from '../types'
import { AlgoliaPostsGetter } from '.'
import AllPostsEliminator from './AllPostsEliminator'
import { Posts } from '../entities'
import AlgoliaPostsToPostsMapper from '../mappers/AlgoliaPostsToPosts'

const PostsUpdater = async (): Promise<Boolean> => {
	const algoliaPosts = await AlgoliaPostsGetter()
	AllPostsEliminator()
	const newPosts = algoliaPosts.map(AlgoliaPostsToPostsMapper)
	console.log(newPosts.length)
	await Posts.create(newPosts)
	return true
}

export default PostsUpdater
