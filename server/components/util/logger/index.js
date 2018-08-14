let logger = console

/*
	import winston from 'winston'
	if (config.env == 'test' || config.env == 'local' || config.env == 'development') {
		logger = console
  } else {
	const papertrailTransport = new winston.transports.Papertrail({
		host: config.logger.host,
		port: config.logger.port,
	})

	logger = new winston.Logger({
		transports: [papertrailTransport],
	})
} */

export default logger
