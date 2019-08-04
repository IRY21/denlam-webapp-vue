module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://api2.denlam.ru',
        ws: true,
        secure: false
      }
    }
  }
}