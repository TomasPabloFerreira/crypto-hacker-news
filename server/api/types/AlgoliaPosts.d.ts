type AlgoliaPosts = {
	"created_at": string,
	"title": string,
	"url": string,
	"author": string,
	"points": any,
	"story_text": string,
	"comment_text": string,
	"num_comments": any,
	"story_id": any,
	"story_title": string,
	"story_url": string,
	"parent_id": any,
	"created_at_i": any,
	"_tags": string[], 
	"objectID": any,
	"_highlightResult": {
		"author": {
			"value": string,
			"matchLevel": string,
			"matchedWords": any[]
		},
		"comment_text": {
			"value": string,
			"matchLevel": string,
			"fullyHighlighted": Boolean,
			"matchedWords": string[]
		},
		"story_title": {
			"value": string,
			"matchLevel": string,
			"matchedWords": any[]
		},
		"story_url": {
			"value": string,
			"matchLevel": string,
			"matchedWords": any[]
		}
	}
}

export default AlgoliaPosts
