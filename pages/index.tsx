import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nebula Design System</title>
        <meta name="description" content="Nebula Design System Labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Nebula Design System!
        </h1>

        <p className={styles.description}>
          Here you will find much of the product
          <code className={styles.code}>building blocks</code>
          that you will need!
        </p>

        <div className={styles.grid}>
  
          <Link href="/roadmap">
            <a className={styles.card}>
              <h2>Roadmap &rarr;</h2>
              <p>Find out what&#39;s ahead.</p>
            </a>
          </Link>
  
          <Link href="/process">
            <a className={styles.card}>
              <h2>Process &rarr;</h2>
              <p>Learn about how we run.</p>
            </a>
          </Link>
  
          <Link href="/community">
            <a className={styles.card}>
              <h2>Community &rarr;</h2>
              <p>Find out how we engage.</p>
            </a>
          </Link>
  
          <Link href="/team">
            <a className={styles.card}>
              <h2>Team &rarr;</h2>
              <p>Get to know us.</p>
            </a>
          </Link>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
