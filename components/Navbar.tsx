import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={styles.navbar}>
		<ul className={styles.listContainer}>
			<div className={styles.inner}> 
				<li>
					<Link className={styles.link} href="/">SKATER LORUM IPSUM</Link>
				</li>
				<li>
					<Link className={styles.link} href="/Sk8rs"> Sk8rs</Link>
				</li>
				<li>
					<Link className={styles.link} href="/Videos">Videos</Link>
					</li>
				<li>
					<Link className={styles.link} href="/About">About</Link>
				</li>
			</div>
		</ul>
	</div>
	)
}

export default Navbar