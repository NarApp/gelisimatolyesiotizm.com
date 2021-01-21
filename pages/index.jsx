import {Descriptions, Card , List, Space, Typography, Avatar, Col, Row} from 'antd'
import Layout from 'components/Layout'
import HomeSlider from 'components/HomeSlider'

import {
  StarOutlined
} from '@ant-design/icons'




export default () =>
  <Layout>
    <HomeSlider />  

    <div style={{maxWidth: 960, margin: 'auto'}}>
      <Card bodyStyle={{textAlign: 'center'}} bordered={false}>
        <Space direction="vertical" style={{textAlign:'center'}} size={0}>
          <Typography.Text strong style={{fontSize: 32}}>Hareket ve etkileşim</Typography.Text>
          <Typography.Text type="secondary" style={{fontSize: 24}}>Beyin gelişiminin en etkili iki temel parametresidir.</Typography.Text>
        </Space>    
      </Card>    
    </div>

    <div style={{maxWidth: 960, margin: '24px auto', display: 'flex'}}>
    <Card title="Kitap satışı">
      <Card.Meta
        avatar={<Avatar src="/kitap.jpg"  size={200}/>}
        title='Otizmde Doğru Adımlar "Emre Serge Özdemir"'
        description={(
          <Descriptions column={1}>
            <Descriptions.Item label="Emine Elvan"><a href="tel:0554 566 4918">0(554) 566 4918</a></Descriptions.Item>
            <Descriptions.Item label="Oyun Terapi Market"><a href="tel:0553 720 0372">0(553) 720 0372</a></Descriptions.Item>
            <Descriptions.Item label="Satış Mağazaları">
              <Space>
              <a href="https://www.trendyol.com/oyun-terapi-market/otizmde-dogru-adimlar-emre-serge-ozdemir-p-46987394">trendyol</a>
              <a href="https://urun.n11.com/anne-ve-baba-kitapligi/otizmde-dogru-adimlar-emre-serge-ozdemir-P445684209">n11</a>
              </Space>
            </Descriptions.Item>
          </Descriptions>          
        )}
      />
    </Card>      
    </div>  


    <div style={{maxWidth: 960, margin: '24px auto'}}>
    <Row gutter={24}>
      <Col md={12}>
        <Card title="Doğru bir özel eğitim">
          <ul>
            <li>Otizm eksiklik değil farkındalıktır.</li>
            <li>Farkındalıkları birlikte farkedelim.</li>
            <li>Doğru bir özel eğitim çocuğunuzun hayatını degiştir.</li>
            <li>Çocuğun algısının kapalı olması beynin uyuyor olmasından kaynaklanır.</li>
            <li>Uyuyan beyni etkileşim ve hareket uyandırır.</li>
          </ul>
        </Card>
      </Col>
      <Col md={12}>
        <Card title="Her hafta canlı yayın ve soru cevap">
          <ul>
            <li>Her hafta canlı yayın ve soru cevap.</li>
            <li>Soru cevap videolarımız için instagram hesabımızı takip edin.</li>
          </ul>
          <br/>
          <br/>
          <br/>
        </Card>
      </Col>
    </Row>
    </div>

  </Layout>

