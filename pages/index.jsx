import {Descriptions, Card , List} from 'antd'
import Layout from 'components/Layout'
import HomeSlider from 'components/HomeSlider'

import {
  StarOutlined
} from '@ant-design/icons'




export default () =>
  <Layout>
    <HomeSlider />  

    <div style={{margin:24}}></div> 

    <div className="horizontal">
      
      <div style={{ width: '50%'}}>
        <img src="/kitap.jpg" style={{width: 'auto', height: '250px', objectFit: 'fill'}}/>
      </div>

      <div style={{width: '50%'}}>
        <Descriptions title="Kitap Satışı" column={1} style={{marginBottom: 24}}>
          <Descriptions.Item label="Emine Elvan"><a href="tel:0554 566 4918">0(554) 566 4918</a></Descriptions.Item>
          <Descriptions.Item label="Oyun Terapi Market"><a href="tel:0553 720 0372">0(553) 720 0372</a></Descriptions.Item>
          <Descriptions.Item label="Satış Mağazaları">
            <a href="https://www.trendyol.com/oyun-terapi-market/otizmde-dogru-adimlar-emre-serge-ozdemir-p-46987394">trendyol</a><br/>
            <a href="https://urun.n11.com/anne-ve-baba-kitapligi/otizmde-dogru-adimlar-emre-serge-ozdemir-P445684209">n11</a><br/>
          </Descriptions.Item>
        </Descriptions>
      </div> 
    </div>


    <div style={{margin:24}}></div> 


    <div className="horizontal top">
      
      <div style={{ width: '50%'}}>
        <List
          dataSource={[
            'Otizm eksiklik değil farkındalıktır.',
            'Farkındalıkları birlikte farkedelim.',
            'Doğru bir özel eğitim çocuğunuzun hayatını degiştir.',
            'Çocuğun algısının kapalı olması beynin uyuyor olmasından kaynaklanır.',
            'Uyuyan beyni etkileşim ve hareket uyandırır.'
          ]}
          renderItem={item => (<List.Item><StarOutlined /> {item}</List.Item>)}
        />        
      </div>

      <div style={{width: '50%'}}>
        <List
          dataSource={[
            'Her hafta canlı yayın ve soru cevap.',
            'Soru cevap videolarımız için instagram hesabımızı takip edin.',
          ]}
          renderItem={item => (<List.Item><StarOutlined /> {item}</List.Item>)}
        />    
      </div> 
    </div>


  </Layout>

