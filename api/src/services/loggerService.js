const { createLogger, format, transports } = require('winston');

const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};
 
var customFormat = format.combine(
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss'}),
    format.prettyPrint(),
    format.errors({ stack: true }),
    format.printf(info => `${info.timestamp} - [${info.level}]: ${info.message}`)
);

const logger = createLogger({
    levels: logLevels,
    transports: [new transports.File({ filename: 'log_app.log' })],
    format: customFormat
});

if (process.env.NODE_ENV !== 'prd') {
    logger.add(new transports.Console({ format: customFormat}));
}

module.exports = { logger }