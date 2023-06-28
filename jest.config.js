module.exports = {
    moduleDirectories: [
      'node_modules',
      'src/tests/',
      __dirname      
    ],
    transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  }