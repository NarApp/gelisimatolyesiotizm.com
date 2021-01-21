import {Descriptions, Card , List, Space, Typography, Avatar, Col, Row, Button} from 'antd'
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


    <div style={{maxWidth: 960, margin: '24px auto'}}>
        <Card>
          <Row gutter={24} justify="center" align="middle">
            <Col sm={6} md={6} style={{width: '100%'}}>
                <img src="/kitap.jpg" style={{width: '100%'}}/>
            </Col>
            <Col sm={18} md={18} style={{width: '100%'}}>
              <h2 style={{color: 'rgb(251, 0, 0)'}}>Otizmde Doğru Adımlar "Emre Serge Özdemir"</h2>
              <h3>Kitap satışı</h3>
              <ul style={{padding: '0 15px'}}>
                <li>Gelişim Atölyesi İmzalı Kitap "Emine Elvan Tel: <a href="tel:0554 566 4918">0(554) 566 4918</a></li>
                <li>Oyun Terapi Market Tel: <a href="tel:0553 720 0372">0(553) 720 0372</a></li>
                <li>
                  <Space>
                    <span>Satış Mağazaları </span>
                    <a href="https://www.trendyol.com/oyun-terapi-market/otizmde-dogru-adimlar-emre-serge-ozdemir-p-46987394">trendyol</a>
                    <a href="https://urun.n11.com/anne-ve-baba-kitapligi/otizmde-dogru-adimlar-emre-serge-ozdemir-P445684209">n11</a>
                  </Space>
                </li>
              </ul>
            </Col>
          </Row>
        </Card>
    </div>


    <div style={{maxWidth: 960, margin: '24px auto'}}>
    <Row gutter={24}>
      <Col md={12} style={{width: '100%'}}>
        <Card title="Doğru bir özel eğitim">
          <ul style={{margin:0, padding:'0 20px'}}>
            <li>Otizm eksiklik değil farkındalıktır.</li>
            <li>Farkındalıkları birlikte farkedelim.</li>
            <li>Doğru bir özel eğitim çocuğunuzun hayatını degiştir.</li>
            <li>Çocuğun algısının kapalı olması beynin uyuyor olmasından kaynaklanır.</li>
            <li>Uyuyan beyni etkileşim ve hareket uyandırır.</li>
          </ul>
          <p><Typography.Link type="link" href='/otizm-nedir'>devamı {'>'}</Typography.Link></p>
        </Card>
      </Col>
      <Col md={12} style={{width: '100%'}}>
        <Card title="Her hafta canlı yayın ve soru cevap">
          <div>Her hafta canlı yayın ve soru cevap.</div>
          <div>Soru cevap videolarımız için instagram hesabımızı takip edin.</div>
          <p><Typography.Link type="link" href='/otizm-nedir'>devamı {'>'}</Typography.Link></p>
          <br/>
          <br/>
          <br/>
        </Card>
      </Col>
    </Row>
    </div>

  </Layout>

