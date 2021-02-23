import { Posts } from '../entities'

const AllPostsEliminator = async (condition: any): Promise<Boolean> => {
	await Posts.deleteMany(condition)
	return true
}

export default AllPostsEliminator
