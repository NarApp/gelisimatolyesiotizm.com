import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {Menu, Drawer, Space, Button} from 'antd'
import styles from './index.module.scss'

import MediaQuery, {useMediaQuery} from 'react-responsive'


import {
  PhoneOutlined,
  MenuOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
 } from '@ant-design/icons'


 
export default (props) => {
  const [visible, setVisible] = useState(false);

  const router = useRouter()
  const path = router.asPath.split('?')[0]

  const isMobile = useMediaQuery({ maxWidth: 960/* 767 */ })
  
  return (
    <>
    <div style={{backgroundColor: '#f46c38', padding: 12}}>
      <div style={{maxWidth: 960, margin: 'auto',  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Space>
          <Link href="tel:0553 299 0056">
              <a target="_blank" style={{color: 'white',fontSize: 24}}><PhoneOutlined style={{color: 'white', fontSize: 24}}/> 0553 299 0056</a>
          </Link>
        </Space>
        <div style={{width: 24}}></div>
        <Space>
          <Link href="https://www.facebook.com/serge.ozdemir.3?fref=ts">
            <a target="_blank"><FacebookOutlined style={{color: 'white', fontSize: 24}}/></a>
          </Link>
          <Link href="https://twitter.com/emreserge">
            <a target="_blank"><TwitterOutlined style={{color: 'white', fontSize: 24}}/></a>
          </Link>
          <Link href="https://www.instagram.com/otizmgelisim/">
            <a target="_blank"><InstagramOutlined style={{color: 'white', fontSize: 24}}/></a>
          </Link>  
          <Link href="https://www.youtube.com/results?search_query=emre+serge+özdemir">
            <a target="_blank"><YoutubeOutlined style={{color: 'white', fontSize: 24}}/></a>
          </Link>
        </Space>
      </div>
    </div>

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/"><a><img src="/logo.png" style={{height: 70}}/></a></Link>
        
        <div style={{flex:1}}> </div>

        {isMobile 
        ? (
          <Button type="dashed" onClick={x=>setVisible(true)}><MenuOutlined /></Button>      
        )
        : (
          <Space>
            <Link href="/"><a className={path=='/' ? 'active': ''}>Anasayfa</a></Link>
            <Link href="/hakkimizda/"><a className={path=='/hakkimizda/' ? 'active': ''}>Hakkımızda</a></Link>
            <Link href="/otizm-nedir/"><a className={path=='/otizm-nedir/' ? 'active': ''}>Otizm Nedir?</a></Link>
            <Link href="/egitimlerimiz/"><a className={path=='/egitimlerimiz/' ? 'active': ''}>Eğitimlerimiz</a></Link>
            <Link href="/atolyemiz/"><a className={path=='/atolyemiz/' ? 'active': ''}>Atölyemiz</a></Link>
            <Link href="/iletisim/"><a className={path=='/iletisim/' ? 'active': ''}>İletişim</a></Link>          
          </Space>
        )
        }

      </div>
    </div>

    <Drawer
      placement="left"
      closable={false}
      onClose={x=>setVisible(false)}
      visible={visible}
      //title={<Link href="/uye-girisi"><Button href="/uye-girisi" type="dashed">Üye Girişi</Button></Link>}
      width={'auto'}
      bodyStyle={{padding: '24px 0'}}
    >
      <Menu
        style={{ width: 200 }}
        mode="inline"
      >
        <Menu.Item key="/"><Link href="/"><a>Anasayfa</a></Link></Menu.Item> 
        <Menu.Item key="/hakkimizda/"><Link href="/hakkimizda/"><a>Hakkımızda</a></Link></Menu.Item> 
        <Menu.Item key="/otizm-nedir/"><Link href="/otizm-nedir/"><a>Otizm Nedir</a></Link></Menu.Item> 
        <Menu.Item key="/egitimlerimiz/"><Link href="/egitimlerimiz/"><a>Eğitimlerimiz</a></Link></Menu.Item> 
        <Menu.Item key="/atolyemiz/"><Link href="/atolyemiz/"><a>Atölyemiz</a></Link></Menu.Item> 
        <Menu.Item key="/iletisim/"><Link href="/iletisim/"><a>İletişim</a></Link></Menu.Item> 
      </Menu>
    </Drawer>     
    </>
  )
}




