import Layout from 'components/Layout'

import {Card, Col, Row} from 'antd'

export default () =>
  <Layout>

    <div className="page">


    <Row gutter={[24,24]}>
      <Col md={24}>
        <Card bodyStyle={{textAlign: 'center'}}>
        <h2 style={{margin: 0, fontSize:32, fontWeight: 'bold'}}>OTİZM EKSİKLİK DEĞİL,FARKINDALIKTIR!</h2>
        <h2 style={{margin: 0, fontSize:24, color: 'gray'}}>FARKINDALIKLARI,BİRLİKTE FARKEDELİM!</h2>
        </Card>
      </Col>
      
      <Col md={24}>
        <Card title="OTİZM NEDİR?">
        OTİZM; BÜYÜK ÇOĞUNLUKLA YAŞAMIN İLK 3 YILINDA ORTAYA ÇIKAN NÖROLOJİK TEMELLİ GENETİK BİR FARKLILIKTIR.OTİZMİN TEMEL PROBLEMİ ETKİLEŞİM VE ETKİLEŞİM TEMELLİ DAVRANIŞLARDAKİ FARKLILIKLARDIR.OTİZM ÖZÜNDE BİR SOSYALİZASYON PROBLEMİDİR.
        </Card>
      </Col>

      <Col md={12}>
        <Card>
        <img src="/otizmnedir.png" style={{width: '100%'}}/>
        </Card>
      </Col>
      <Col md={12}>
        <Card title="OTİZM İŞARETLERİ">
          <p>Otizmde temel farklılık etkileşim beceilerindeki yetersizlik ve farklılıklardır.Takıntılı davranış ve hareketler otizmli çocuklarda eşlik eden problemlerden olsa da temel yetersizliklerden  değildir.Aşağıda maddeler halinde sıralanan davranışlar otizmden şüphelenen ailelerin temel yol göstericileridir.</p>
          <ol>
            <li>GÖZ TEMASINDA YETERSİZLİK</li>
            <li>İSMİNE TEPKİ VERMEDE GÜÇLÜK</li>
            <li>YAŞITLARI VE YETİŞKİNLERLE İLETİŞİM-ETKİLEŞİM KURMADA YETERSİZLİK,İSTEKSİZLİK</li>
            <li>AMAÇLI,İSTENDİK HAREKET BECERİSİNDE YETERSİZLİK</li>
            <li>İLETİŞİM AMAÇLI JEST VE HAREKET KULANAMAMA(BAY BAY-İSTEDİĞİ ŞEYİ PARMAĞIYLA GÖSTERME-ÖPÜCÜK VERME-GEL YAPMA-HAYIR ANLAMINDA KAFA SALLAMA...VB)</li>
            <li>SÖYLENENLERİ ANLAMA VE YERİNE GETİRMEDE YETERSİZLİK(ALICI DİL)</li>
            <li>İSTEK VE İHTİYAÇLARINI SÖYLEMEDE YETERSİZLİK(İFADE EDİCİ DİL-KONUŞMA)</li>
            <li>OYUNCAKLARIYLA AMACINA UYGUN OYNAMADA YETERSİZLİK,KİŞİLERDEN ÇOK OYUNCAKLARLA AMAÇSIZ OYNAMA</li>
            <li>ISRARCI DAVRANIŞ ÖRÜNTÜSÜ(AYNI OYUNCAKLA OYNAMAK İSTEME,AYNI KIYAFETİ GİYMEK İSTEME,AYNI YOLDAN GİTMEK İSTEME,İSTEDİĞİ OLMADIĞINDA AŞIRI TEPKİLER VERME)</li>
            <li>DENGE VE KORDİNASYONDA PROBLEMLER</li>
            <li>DUYUSAL HASSASİYETLER(PARMAK UCUNDA YÜRÜME-KULAĞINI TIKAMA-DÖNME-ACIYA DUYARLILIK-SAÇ KESTİRMEK İSTEMEME...vb)</li>
          </ol>          
        </Card>
      </Col>

    </Row>


  

    </div>

  </Layout>

