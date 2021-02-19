import { Carousel } from "antd";

import {
  RightOutlined
} from '@ant-design/icons'

import styles from './index.module.scss'


export default (props) =>  {

  const data = [
    {icerik: '/banner-home/1.jpg'},
    {icerik: '/banner-home/2.jpg'},
    {icerik: '/banner-home/3.jpg'},
    {icerik: '/banner-home/4.jpg'},
    {icerik: '/banner-home/5.jpg'},
    {icerik: '/banner-home/6.jpg'},
    {icerik: '/banner-home/7.jpg'},
    {icerik: '/banner-home/8.jpg'},
    {icerik: '/banner-home/9.jpg'},     
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






