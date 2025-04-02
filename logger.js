
//it sets up winston , logging library which is used to record errors and server updates 
// createLogger -> Creates a new logger instance.
// format -> Defines the structure of log messages.
// transports -> Specifies where the logs should be stored (console, file, etc.).

const { createLogger, format, transports } = require("winston");

 //creates logger instances with defauult log 
const logger = createLogger({
    level: "info", // Logs info, warnings, and errors
    format: format.combine(
         //timestamp is added 
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
       //it defines how logs should display 
        format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new transports.Console(), // Logs to console
        new transports.File({ filename: "logs/error.log", level: "error" }), // Logs errors to file
        new transports.File({ filename: "logs/combined.log" }) // Logs everything to file
    ]
});

//export the logger instance to server.js so that we can use logger file
module.exports = logger;
