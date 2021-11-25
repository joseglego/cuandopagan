import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import Payday from '../src/components/Payday';
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
        <Payday />
      </main>

      <footer className={styles.footer}>
        <div>
          Desarrollado por <a href="https://joseglego.io" target="_blank" rel="noopener noreferrer">JosegLEGO</a><br />
          Código en <a href="https://github.com/joseglego/cuandopagan"  target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
