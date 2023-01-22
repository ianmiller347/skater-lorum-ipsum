import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
		<ul className={styles.listContainer}>
			<div className={styles.inner}> 
				<li>
					<Link className={styles.link} href="/">Home</Link>
				</li>
				<li>
					<Link className={styles.link} href="/sk8rs"> Sk8rs</Link>
				</li>
					<Link className={styles.link} href="/videos">Videos</Link>
				<li>
					<Link className={styles.link} href="/about">About</Link>
				</li>
			</div>
		</ul>
	</div>
	)
}

export default Navbar