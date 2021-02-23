import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const api = {
	getPosts: async function () { return await axios.get(`${baseUrl}/posts`) },
	deletePost: async function (_id) {
		return await axios.delete(`${baseUrl}/posts`, { data: { _id } })
	}
}
