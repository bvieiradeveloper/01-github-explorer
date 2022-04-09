const { runtime } = require('webpack')

module.exports = {
  presets: [
    '@babel/preset-env',
    //Automatic insert report react
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
}
