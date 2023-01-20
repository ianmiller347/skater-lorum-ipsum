import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skater Lorem Ipsum Generator</title>
        <meta name="description" content="Skater lorem ipsum generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Navbar/>
			<div>Home</div>
    </div>
  )
}
