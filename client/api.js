import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const api = {
	getPosts: async function () { return await axios.get(`${baseUrl}/posts`) }
}
