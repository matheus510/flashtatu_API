// I uploaded this file to git so you can avaliate me. After this challenge I will change my dev database users.
const config = {
  development: {
    dbURI: 'mongodb://flasht_dev:Flash1*@ds219672.mlab.com:19672/flashtatu_dev',
    port: 5000,
    hashingSecret: 'superSecret'
  },
  test: {
    dbURI: 'mongodb://flasht_dev:Flash1*@ds219672.mlab.com:19672/flashtatu_dev',
    port: 8080,
    hashingSecret: 'hyperSecret'
  }
}

const env = config[process.env.NODE_ENV] ? process.env.NODE_ENV : 'development'

export default config[env]
