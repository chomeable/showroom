import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treeosis Showroom</title>
        <meta name="description" content="Treeosis Showroom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://chome.vercel.app">Treeosis</a>
        </h1>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Have a look at all our currently released projects!</p>
          </a>

          <a href="/designs" className={styles.card}>
            <h2>Designs &rarr;</h2>
            <p>See what we are able to design and create for your next page!</p>
          </a>

          <a
            href="/backend"
            className={styles.card}
          >
            <h2>Backend &rarr;</h2>
            <p>The things that you cant see in projects</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Prices &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
