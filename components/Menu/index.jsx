import Link from 'next/link'
import styles from './index.module.scss'

export default (props) => {
  return (
    <div className={styles.wrapper}>
      <div className="container center" className={styles.container}>
        
        <Link href="/"><a>Anasayfa</a></Link>
        <Link href="/hakkimizda"><a>Hakkımızda</a></Link>
        <Link href="/otizm-nedir"><a>Otizm Nedir?</a></Link>
        <Link href="/egitimlerimiz"><a>Eğitimlerimiz</a></Link>
        <Link href="/atolyemiz"><a>Atölyemiz</a></Link>
        <Link href="/iletisim"><a>İletişim</a></Link>
        


      </div>
    </div>
  )
}






