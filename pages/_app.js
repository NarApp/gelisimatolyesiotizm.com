/* import 'bootstrap/dist/css/bootstrap.css' */
/* import 'video.js/dist/video-js.css' */
import 'utils/nprogress'
import 'antd/dist/antd.css'
import 'styles/globals.scss'

import App from 'App'


const Noop = ({ children }) => children


function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  return (
    <App pageProps={pageProps} Layout={Layout}>
      <Component {...pageProps}/>
    </App>  
  )
}
export default MyApp


/*
  Metric ------
  https://nextjs.org/docs/advanced-features/measuring-performance
*/


//  export function reportWebVitals(metric) { /* metric */ }