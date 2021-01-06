const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {

  //trailingSlash: true,

  sassOptions: {
    includePaths: [
      // path.join(__dirname, 'styles')
      // path.join(__dirname, 'sass-library'),
    ],
  },


  //i18n: {
  //  //localeDetection: false,
  //  locales: ['tr', 'en', 'ru'], 
  //  defaultLocale: 'tr',
  //},


  //async redirects() {
  //  return [
  //    {
  //      source: '/frontpage',
  //      destination: '/',
  //      permanent: true,
  //    },
  //  ]
  //}

}