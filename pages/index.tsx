import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import { ipsumWords } from '../data/ipsumWords'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skater Lorem Ipsum Generator</title>
        <meta name="description" content="Skater lorem ipsum generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Navbar/>
			<div className='wrapper'>
				<div className={styles.dummyData}>
					{ipsumWords.join(' ')}
				</div>
			</div>
    </div>
  )
}
