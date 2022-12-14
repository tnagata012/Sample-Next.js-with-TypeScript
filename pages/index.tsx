import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const H1 = styled.h1`
  color: lime;
`

const H2 = styled.h2`
  color: aqua;
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <H1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </H1>

        <p className={styles.description}>Get started by editing under the pages folder.</p>

        <div className={styles.grid}>
          <Link href='/nextjs-sample/link'>
            <a className={styles.card}>
              <H2>Rendering &rarr;</H2>
              <p>
                SSR(Server Side Rendering) <br />
                SSG(Static Site Generation) <br /> ISR(Incremental Static Regeneration) <br />
                by Next.js
              </p>
            </a>
          </Link>

          <Link href='/nextjs-sample/image-sample'>
            <a className={styles.card}>
              <H2>Images &rarr;</H2>
              <p>Image component samples by Next.js</p>
            </a>
          </Link>

          <Link href='/nextjs-sample/sayHello'>
            <a className={styles.card}>
              <H2>API &rarr;</H2>
              <p>Say hallo API Service by Next.js</p>
            </a>
          </Link>

          <Link href='/nextjs-sample/env-sample'>
            <a className={styles.card}>
              <H2>Environment &rarr;</H2>
              <p>Environment sample by Next.js</p>
            </a>
          </Link>

          <Link href='styled-components-sample/styled-link-sample'>
            <a className={styles.card}>
              <H2>Styled-components&rarr;</H2>
              <p>Style samples</p>
            </a>
          </Link>

          <Link href='/react-sample/Components'>
            <a className={styles.card}>
              <H2>React &rarr;</H2>
              <p>React samples</p>
            </a>
          </Link>

          <Link href='/design/CountButtonSample'>
            <a className={styles.card}>
              <H2>Basic Design &rarr;</H2>
              <p>Count Button</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
