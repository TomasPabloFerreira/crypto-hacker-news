import styles from './PostList.module.scss'

const PostList = ({ posts }) => {

	const handleClick = (x) => {


	}

	return posts.map(x => (
		<a className={styles.post} href={x.url} target="_blank">
			<span className={styles['post--resume']}>
				<h3 className={styles['post--title']}>{x.title}</h3>
				<h3 className={styles['post--author']}>- {x.author} -</h3>
			</span>

			<h3 className={styles['post--created_at']}>{x.created_at}</h3>
		</a>
	))
}

export default PostList
