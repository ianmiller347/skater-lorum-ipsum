import React from 'react'
import Navbar from '../components/Navbar'
import { videoURLS } from '../data/videoURLs'
import styles from '../styles/Video.module.css'

const Videos = () => {

	return (
		<div>
			<Navbar/>
			<div className={`${styles.videosContainer} wrapper`}>
				{videoURLS.map(url => {
					return (
						<div key={url} className={styles.iframeContainer}>
							<iframe 
								src={url}
								title="YouTube video player" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowFullScreen>
							</iframe>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Videos