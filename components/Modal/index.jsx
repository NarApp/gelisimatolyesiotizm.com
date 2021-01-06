import { Row, Col, Modal } from 'antd'
import styles from './index.module.scss'

export default (props) => {
  return (
    <Modal 
    visible={props.visible} 
    onOk={props.closeHandler} 
    onCancel={props.closeHandler}
    closable
    footer={false}    
    className={styles.modal}
    width="fill-content"
  >
    {props.children}
  </Modal>   
  )
}






