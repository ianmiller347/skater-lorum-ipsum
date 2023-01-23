import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<div >
		<ul>
			<div > 
				<li>
					<Link className="" href="/">SKATER LORUM IPSUM</Link>
				</li>
				<li>
					<Link className="" href="/Sk8rs"> Sk8rs</Link>
				</li>
				<li>
					<Link className="" href="/Videos">Videos</Link>
					</li>
				<li>
					<Link className="" href="/About">About</Link>
				</li>
			</div>
		</ul>
	</div>
	)
}

export default Navbar