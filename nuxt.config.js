module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    '~/css/main.scss'
  ],
  build: {
    vendor: ['vue-material']
  },
  plugins: [
    { src: '~/plugins/material.js', ssr: false }
  ]
}
