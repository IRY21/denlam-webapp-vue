module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://api.denlam.ru',
        ws: true,
        secure: false
      }
    }
  }
}