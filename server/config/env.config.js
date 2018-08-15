const config = {
  development: {
    dbURI: 'mongodb://flasht_dev:Flash1*@ds219672.mlab.com:19672/flashtatu_dev',
    port: 5000,
    hashingSecret: 'superSecret'
  },
  test: {
    dbURI: 'mongodb://flasht_dev:Flash1*@ds219672.mlab.com:19672/flashtatu_dev',
    port: 8080,
    hashingSecret: 'superSecret'
  }
}

const env = config[process.env.NODE_ENV] ? process.env.NODE_ENV : 'development'

export default config[env]
