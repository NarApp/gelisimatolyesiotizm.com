import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss'

export default (props) => {
  const router = useRouter()

  const path = router.asPath.split('?')[0]

  return (
    <div className={styles.wrapper}>
      <div className="container center" className={styles.container}>

        <Link href="/"><a className={path=='/' && 'active'}>Anasayfa</a></Link>
        <Link href="/hakkimizda"><a className={path=='/hakkimizda/' && 'active'}>Hakkımızda</a></Link>
        <Link href="/otizm-nedir"><a className={path=='/otizm-nedir/' && 'active'}>Otizm Nedir?</a></Link>
        <Link href="/egitimlerimiz"><a className={path=='/egitimlerimiz/' && 'active'}>Eğitimlerimiz</a></Link>
        <Link href="/atolyemiz"><a className={path=='/atolyemiz/' && 'active'}>Atölyemiz</a></Link>
        <Link href="/iletisim"><a className={path=='/iletisim/' && 'active'}>İletişim</a></Link>

      </div>
    </div>
  )
}






