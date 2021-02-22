import { AlgoliaPostsType } from '../types'
import axios from 'axios'

const AlgoliaPostsGetter = async (): Promise<AlgoliaPostsType[]> => {
	const result = await axios.get(
		'http://hn.algolia.com/api/v1/search_by_date?query=crypto'
	)
	const data : AlgoliaPostsType[] = result.data.hits
	return data
}

export default AlgoliaPostsGetter
