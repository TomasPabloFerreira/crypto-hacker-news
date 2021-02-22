import { Header, PostList } from '../components'
import { api } from '../api'

export default function Home({ posts }) {
	return (
		<>
			<Header />
			<PostList posts={posts} />
		</>
	)
}

export const getServerSideProps = async (context) => {
	try {
		const posts = await api.getPosts()

		return {
			props: {
				posts: posts.data
			}
		}
	} catch (err) {
		console.log(err)
		return {
			props: {
				posts: [],
			},
		}
	}
}