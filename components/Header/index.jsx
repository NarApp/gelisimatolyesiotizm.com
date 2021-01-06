import Link from 'next/link'
import {Button} from 'antd'
import styles from './index.module.scss'

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined
 } from '@ant-design/icons'


 
export default (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <Link href="/"><a><img src="/logo.png"/></a></Link>

          <div style={{flex:1}}> </div>
                  
          <Link href="https://www.facebook.com/serge.ozdemir.3?fref=ts"><Button type="link" icon={<FacebookOutlined/>}/></Link>
          <Link href="#"><Button type="link" icon={<TwitterOutlined/>}/></Link>
          <Link href="https://www.instagram.com/otizmgelisim/"><Button type="link" icon={<InstagramOutlined/>}/></Link>  
          <Link href="https://www.youtube.com/results?search_query=emre+serge+özdemir"><Button type="link" icon={<YoutubeOutlined/>}/></Link>


      </div>
    </div>
  )
}






