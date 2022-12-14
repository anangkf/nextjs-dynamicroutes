import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
// import ListMasakan from '../components/listMasakan'
import axios from "axios"
import ListMasakan from '../../components/listMasakan'
import Link from 'next/link'

const Details = () =>{

  const router = useRouter();
  const {key} = router.query;

  const [detailMasakan, setDetailMasakan] = useState(null);

  const fetchData = async () =>{
    await axios.get(`https://masak-apa-tomorisakura.vercel.app/api/recipe/${key}`)
      .then(res=>{
        setDetailMasakan(res.data.results);
        // console.log(res.data.results)
      })
      .catch(err =>{
        console.log(err.message);
    })
  }

  useEffect( ()=>{
    
    key && fetchData();

  },[key])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{detailMasakan?.title}</title>
        <meta name="description" content={detailMasakan?.desc} />
        <meta name="keywords" content={`Resepku, ${detailMasakan?.title.replaceAll(" ", ",")}`} />
        <meta name="google" content="notranslate" />
        <meta property="og:title" content={detailMasakan?.title} />
        <meta property="og:description" content={detailMasakan?.desc} />
        <meta property="og:image" content={detailMasakan?.thumb} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        {detailMasakan?.title}
        </h1>

        <Link href="/" className={styles.center}>
          Return Home
        </Link>

        <p className={styles.description}>
          Oleh: {detailMasakan?.author.user}, pada {detailMasakan?.author.datePublished}. Level: {detailMasakan?.dificulty}<br/>
          Waktu: {detailMasakan?.times} | Untuk {detailMasakan?.servings}
        </p>

        <h2 className={styles.left}>
          Deskripsi
        </h2>
        <p className={styles.description.left}>
          {detailMasakan?.desc}
        </p>

        <h2 className={styles.left}>
          Bahan-bahan
        </h2>
        <ul className={styles.description.left}>
          {detailMasakan?.ingredient.map(i=>{
            return(
              <li key={i}>{i}</li>
            )
          })}
        </ul>

        <h2 className={styles.left}>
          Langkah-langkah
        </h2>
          {detailMasakan?.step.map(i=>{
            return(        
                <p key={i}>{i}</p>
            )
          })}

        {/* <ListMasakan data={listMasakan} /> */}
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

export default Details;
