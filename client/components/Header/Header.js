import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<h1 className={styles['header--text__title']}>HN Feed</h1>
				<h3 className={styles['header--text__subTitle']}>We {'<'}3 crypto hacker news!</h3>
			</div>
		</header>
	)
}

export default Header
