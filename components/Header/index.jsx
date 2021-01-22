import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {Menu, Drawer, Space, Button} from 'antd'
import styles from './index.module.scss'

import MediaQuery, {useMediaQuery} from 'react-responsive'


import {
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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/"><a><img src="/logo.png"/></a></Link>
        
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
        {/* <Space direction="vertical">
          <Link href="/"><a className={path=='/' ? 'active': ''}>Anasayfa</a></Link>
          <Link href="/hakkimizda"><a className={path=='/hakkimizda/' ? 'active': ''}>Hakkımızda</a></Link>
          <Link href="/otizm-nedir"><a className={path=='/otizm-nedir/' ? 'active': ''}>Otizm Nedir?</a></Link>
          <Link href="/egitimlerimiz"><a className={path=='/egitimlerimiz/' ? 'active': ''}>Eğitimlerimiz</a></Link>
          <Link href="/atolyemiz"><a className={path=='/atolyemiz/' ? 'active': ''}>Atölyemiz</a></Link>
          <Link href="/iletisim"><a className={path=='/iletisim/' ? 'active': ''}>İletişim</a></Link>          
        </Space> */}
      </Menu>
    </Drawer>     
    </>
  )
}




