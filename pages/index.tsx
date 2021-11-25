import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Hello World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://joseglego.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by JosegLEGO
        </a>
      </footer>
    </div>
  )
}

export default Home
