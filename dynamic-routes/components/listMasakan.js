import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


const ListMasakan = (props)=>{
    
    const listMasakan = props.list;
    console.log(listMasakan)

    return(
        <div className={styles.grid}>
          {listMasakan?.map(data=>{
            return(
              <div className={styles.card} key={data.key}>

                <Image
                  className='rounded-full'
                  src={data.thumb}
                  alt='no image'
                  layout='responsive'
                  objectFit='cover'
                  width={6}
                  height={6}
                />

                <Link href={`/detail/${data.key}`} key={data.key} >
                  <h2>{data.key.replaceAll("-"," ").slice(0,32)}... &rarr;</h2>
                </Link>
              </div>

            )
            })
          }
        </div>
    )
};

export default ListMasakan;