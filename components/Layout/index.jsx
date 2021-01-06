import Header from 'components/Header'
import Menu from 'components/Menu'
import styles from './index.module.scss'

export default (props) =>  {

  return (
<div className={styles.wrapper}>
  <div className={styles.container}>

    <Header />  
    <Menu />  
    
    {props.children}

  </div>
</div>  
  )
}
