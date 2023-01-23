import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import { ipsumWords } from '../data/ipsumWords'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skater Lorem Ipsum Generator</title>
        <meta name="description" content="Skater lorem ipsum generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Navbar/>
			<div className='text-center p-6 sm:text-left sm:p-0'>
				<div>
					{ipsumWords.join(' ')}
				</div>
			</div>
    </div>
  )
}
