import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Guides: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nebula Design System</title>
        <meta name="description" content="Nebula Design System Labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Guides
        </h1>
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          RoverHead
        </a>
      </footer>
    </div>
  )
}

export default Guides
