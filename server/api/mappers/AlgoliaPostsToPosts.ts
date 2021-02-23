import { AlgoliaPostsType, PostType } from "../types"

const AlgoliaPostToPost = (algoliaPost: AlgoliaPostsType): PostType => {
	return {
		title: algoliaPost.story_title || algoliaPost.title || '',
		author: algoliaPost.author || '',
		created_at: algoliaPost.created_at || '',
		url: algoliaPost.url || '',
		objectID: algoliaPost.objectID
	}
}

export default AlgoliaPostToPost
