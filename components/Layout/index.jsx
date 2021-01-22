import Header from 'components/Header'
import Menu from 'components/Menu'
import styles from './index.module.scss'

import {Space} from 'antd'

export default (props) =>  {

  return (
<div className={styles.wrapper}>
  <div className={styles.container}>

    <Header />  
    {/* <Menu />   */}
    
    {props.children}


    <div style={{textAlign: 'center', padding: 24, borderTop: '1px dashed lightgray'}}>
      <Space>
      <span>© Serge Egtm Otizm Gelişim Atölyesi Tüm Hakları Saklıdır.</span>
      <a href="mailto:info@gelisimatolyesiotizm.com">info@gelisimatolyesiotizm.com</a>  
      </Space>  
    </div>

  </div>
</div>  
  )
}
