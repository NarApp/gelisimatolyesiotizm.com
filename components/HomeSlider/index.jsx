import { Carousel } from "antd";

import {
  RightOutlined
} from '@ant-design/icons'

import styles from './index.module.scss'


export default (props) =>  {

  const data = [
    {icerik: '/banner-home/1.jpg?text=1'},
    {icerik: '/banner-home/2.jpg?text=2'},
    {icerik: '/banner-home/3.jpg?text=3'},
    {icerik: '/banner-home/4.jpg?text=4'},
    {icerik: '/banner-home/5.jpg?text=5'},
    {icerik: '/banner-home/6.jpg?text=6'},
    {icerik: '/banner-home/7.jpg?text=7'},
    {icerik: '/banner-home/8.jpg?text=8'},
    {icerik: '/banner-home/9.jpg?text=9'},     
  ]

  return (
<div className={styles.wrapper}>
  <div className={styles.container}>
      <Carousel
        dots
        draggable
        //speed={5000}
        //autoplaySpeed={1000}
        //autoplay
        //variableWidth
      >
        {data?.map((x,y)=>
          <div key={y} className={styles.slideNode}>
              <img src={x.icerik}/>
          </div>
        )}
      </Carousel>
  </div>
</div>  
  )
}






