import React, { useState } from 'react';
import { Row, Col } from 'antd'
import Layout from 'components/Layout'

import Modal from 'components/Modal'

export default () => {
  const [img, setImg] = useState(null);
  return (
    <Layout>

      <div className="page">
        <Row gutter={[16, 16]}>
          {[
            '/atolyemiz/1.jpg',
            '/atolyemiz/2.jpg',
            '/atolyemiz/3.jpg',
            '/atolyemiz/4.jpg',
            '/atolyemiz/5.jpg',
            '/atolyemiz/6.jpg',
            '/atolyemiz/7.jpg',
            '/atolyemiz/8.jpg',
            '/atolyemiz/9.jpg',
            '/atolyemiz/10.jpg',
            '/atolyemiz/11.jpg',
            '/atolyemiz/12.jpg',
            '/atolyemiz/13.jpg',
            '/atolyemiz/14.jpg',
            '/atolyemiz/15.jpg',
            '/atolyemiz/16.jpg',
            '/atolyemiz/17.png',
            '/atolyemiz/18.jpg',
          ].map(x => <Col span={6}>
            <img src={x} style={{ width: '100%', cursor: 'pointer' }} onClick={_=>setImg(x)}/>
          </Col>)}
        </Row>
      </div>

      <Modal visible={!!img} closeHandler={x=>setImg(null)}>
        {!!img && <img src={img} style={{maxWidth: '100%'}}/>}
      </Modal>        
    </Layout>
  )
}


