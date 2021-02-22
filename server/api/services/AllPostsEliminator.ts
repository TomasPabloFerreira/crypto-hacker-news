import { Posts } from '../entities'

const AllPostsEliminator = async (): Promise<Boolean> => {
	await Posts.deleteMany({})
	return true
}

export default AllPostsEliminator
