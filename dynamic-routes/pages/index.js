import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react'
import ListMasakan from '../components/listMasakan'
import axios from "axios"

export default function Home() {

  const [listMasakan, setListMasakan] = useState(null);

  const fetchData = async () =>{
    await axios.get(`https://masak-apa-tomorisakura.vercel.app/api/recipes/`)
      .then(res=>{
        setListMasakan(res.data.results);
        // console.log(res.data.results)
      })
      .catch(err =>{
        console.log(err.message);
    })
  }

  useEffect( ()=>{
    
    fetchData();

  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Resepku | Kumpulan Resep Masakan Kekinian 2022</title>
        <meta name="description" content="Kumpulan resep masakan kekinian, rumahan hingga ala restoran dari berbagai bahan dan daerah semua ada disini." />
        <meta name="keywords" content="Resep, Masakan, Kekinian, Rumahan, Restoran" />
        <meta name="google" content="notranslate" />
        <meta property="og:title" content="Resepku | Kumpulan Resep Masakan Kekinian 2022" />
        <meta property="og:description" content="Kumpulan resep masakan kekinian, rumahan hingga ala restoran dari berbagai bahan dan daerah semua ada disini." />
        <meta property="og:image" content="../public/vercel.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Masak Apa Hari Ini?
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ListMasakan list={listMasakan} />
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
