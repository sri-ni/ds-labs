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
  
          <Link href="/roadmap">
            <a className={styles.card}>
              <h2>Process &rarr;</h2>
              <p>Learn about how we run.</p>
            </a>
          </Link>
  
          <Link href="/team">
            <a className={styles.card}>
              <h2>Team &rarr;</h2>
              <p>Get to know us.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Boilerplate example projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Deploy with Vercel.
            </p>
          </a>
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
