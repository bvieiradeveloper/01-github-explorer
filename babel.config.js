const { runtime } = require('webpack')

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    //Automatic insert report react
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
}
