import Link from 'next/link'
import { useRouter } from 'next/router'

import {Button} from 'antd'
import styles from './index.module.scss'

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined
 } from '@ant-design/icons'


 
export default (props) => {
  const router = useRouter()
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <Link href="/"><a><img src="/logo.png"/></a></Link>

          <div style={{flex:1}}> </div>
                  
          <Link href="https://www.facebook.com/serge.ozdemir.3?fref=ts">
            <a target="_blank"><FacebookOutlined style={{fontSize: 32}}/></a>
          </Link>
          <Link href="https://twitter.com/emreserge">
            <a target="_blank"><TwitterOutlined style={{fontSize: 32}}/></a>
          </Link>
          <Link href="https://www.instagram.com/otizmgelisim/">
            <a target="_blank"><InstagramOutlined style={{fontSize: 32}}/></a>
          </Link>  
          <Link href="https://www.youtube.com/results?search_query=emre+serge+özdemir">
            <a target="_blank"><YoutubeOutlined style={{fontSize: 32}}/></a>
          </Link>


      </div>
    </div>
  )
}






