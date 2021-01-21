import { Descriptions, Row, Col, Card, Space } from 'antd';
import Layout from 'components/Layout'


export default () =>
  <Layout>
    <div className="page">


      <Row gutter={[24,24]}>
      <Col md={12} style={{width: '100%'}}>
        <Card title="Serge Egtm Otizm Gelişim Atölyesi">
          Adres: 6782/3 Sk. No:15 Aydınlıkevler Mh. <br />
          Çiğli / İZMİR (Kâtip Çelebi Diş Hastahanesi Üst Yolu)  <br />
          <Space direction="vertical" size={0} style={{marginTop: 6}}>
            <a href="mailto:info@gelisimatolyesiotizm.com">info@gelisimatolyesiotizm.com</a>
            <a href="tel:0553 299 0056">0553 299 0056</a>
          </Space>
        </Card>
      </Col>
      <Col md={12} style={{width: '100%'}}>
        <Card bodyStyle={{padding:0}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561.4238283233342!2d27.07762365803278!3d38.49115709428649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd0accffb2b0b%3A0x6061403318b06ada!2zNjc4Mi8zLiBTay4gTm86MTUsIEF5ZMSxbmzEsWtldmxlciwgMzU2NDAgw4dpxJ9saS_EsHptaXI!5e0!3m2!1str!2str!4v1448825030408" width="100%" height="250" frameborder="0"></iframe>       
        </Card>
      </Col>

    </Row>

    </div>
  </Layout>

