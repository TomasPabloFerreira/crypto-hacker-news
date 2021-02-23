import { useState } from 'react'
import styles from './PostList.module.scss'
import { DeleteIcon } from '../icons'
import { api } from '../../api'

const PostList = ({ posts }) => {

	const [deleted, setDeleted] = useState([])
	const filteredPosts = posts.filter(x => !deleted.includes(x._id))

	const handleDeleteClick = async (e, post) => {
		e.preventDefault()
		const deleteConfirmation = confirm('Are you sure you want to delete?')
		if(!deleteConfirmation) return;

		try{
			await api.deletePost(post._id)
			alert('The record has been deleted successfully.')
			setDeleted([...deleted, post._id])
		} catch(e) {
			console.error(e)
			alert('An error occurred while trying to delete the record.')
		}
	}

	return filteredPosts.map(x => (
		<a  key={x._id} className={styles.post} href={x.url} target="_blank">
			<span className={styles['post--resume']}>
				<h3 className={styles['post--title']}>{x.title}</h3>
				<h3 className={styles['post--author']}>- {x.author} -</h3>
			</span>

			<h3 className={styles['post--created_at']}>{x.created_at}</h3>
			<button
				className={styles['post--button']}
				onClick={e => handleDeleteClick(e, x)}
			>
				<DeleteIcon />
			</button>
		</a>
	))
}

export default PostList
