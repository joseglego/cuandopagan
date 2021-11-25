import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import Payday from '../src/components/Payday';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>¿Cuándo Pagan? caluladora para saber el próximo día de pago.</title>
        <meta name="description" content="¿Cuándo Pagan? caluladora para saber el próximo día de pago." />
        <link rel="icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CB465" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#4CB465" />
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
