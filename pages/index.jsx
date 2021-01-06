import {Descriptions} from 'antd'
import Layout from 'components/Layout'
import HomeSlider from 'components/HomeSlider'


export default () =>
  <Layout>
    <HomeSlider />  

    <div className="horizontal">
      
      <div style={{border: '1px solid lightgray', width: '50%'}}>
        <img src="/kitap.jpg" style={{width: '100%', height: '100%', objectFit: 'fill'}}/>
      </div>

      <div style={{width: '50%'}}>
        <Descriptions title="Kitap Satışı" bordered column={1} style={{marginBottom: 24}}>
          <Descriptions.Item label="Emine Elvan"><a href="tel:0554 566 4918">0(554) 566 4918</a></Descriptions.Item>
          <Descriptions.Item label="Oyun Terapi Market"><a href="tel:0553 720 0372">0(553) 720 0372</a></Descriptions.Item>
          <Descriptions.Item label="Satış Mağazaları">
            <a href="https://www.trendyol.com/oyun-terapi-market/otizmde-dogru-adimlar-emre-serge-ozdemir-p-46987394">trendyol</a><br/>
            <a href="https://urun.n11.com/anne-ve-baba-kitapligi/otizmde-dogru-adimlar-emre-serge-ozdemir-P445684209">n11</a><br/>
          </Descriptions.Item>
        </Descriptions>
      </div> 
    </div>

    <div className="horizontal">
      <div><img src="/slogan1.png" style={{width: '100%'}}/></div>
      <div><img src="/slogan2.png" style={{width: '100%'}}/></div>
    </div>
  </Layout>

