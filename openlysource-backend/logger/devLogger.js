const path = require("path");
const winston = require("winston");
require("winston-daily-rotate-file");
const { createDirectoriesSync } = require("../utils/file.utils");
const { format } = winston;
const { combine, timestamp, printf, colorize, align, json } = format;

const logDir = "logs";
const errorLogsDir = "logs/errors ";
const combinedLogsDir = "logs/combined";
const appInfoLogsDir = "logs/info";
const httpLogsDir = "logs/http";
const exceptionLogsDir = "logs/exception";

createDirectoriesSync(
  logDir,
  errorLogsDir,
  combinedLogsDir,
  appInfoLogsDir,
  httpLogsDir,
  exceptionLogsDir,
);

const timestampFormat = "YYYY-MM-DD HH:mm:ss";

const printFormat = printf(({ level, message, context, timestamp }) => {
  return `[${timestamp}] [${level}] ${message} ${
    context ? "[ctx]: " + JSON.stringify(context) : ""
  }`;
});

const errorFilter = format((info, opts) => {
  return info.level === "error" ? info : false;
});

const infoFilter = format((info, opts) => {
  return info.level === "info" ? info : false;
});

const httpFilter = format((info, opts) => {
  return info.level === "http" ? info : false;
});

const combinedTransport = new winston.transports.DailyRotateFile({
  filename: path.join(combinedLogsDir, "/combined-%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  maxFiles: "30d",
  format: combine(timestamp({ format: timestampFormat }), json()),
});

const infoTransport = new winston.transports.DailyRotateFile({
  filename: path.join(appInfoLogsDir, "/info-%DATE%.log"),
  level: "info",
  datePattern: "YYYY-MM-DD",
  maxFiles: "30d",
  format: combine(timestamp({ format: timestampFormat }), json(), infoFilter()),
});

const errorTransport = new winston.transports.DailyRotateFile({
  filename: path.join(errorLogsDir, "/error-%DATE%.log"),
  level: "error",
  datePattern: "YYYY-MM-DD",
  maxFiles: "30d",
  format: combine(timestamp({ format: timestampFormat }), json(), errorFilter()),
});

const httpTransport = new winston.transports.DailyRotateFile({
  filename: path.join(httpLogsDir, "/http-log-%DATE%.log"),
  level: "http",
  datePattern: "YYYY-MM-DD",
  maxFiles: "3d",
  format: combine(timestamp({ format: timestampFormat }), json(), httpFilter()),
});

const consoleTransport = new winston.transports.Console({
  level: "debug",
  format: combine(
    align(),
    colorize(),
    timestamp({ format: timestampFormat }),
    printFormat,
  ),
});

const exceptionTransport = new winston.transports.DailyRotateFile({
  filename: path.join(exceptionLogsDir, "/exception-log-%DATE%.log"),
});

const devLogger = () => {
  return winston.createLogger({
    transports: [
      combinedTransport,
      infoTransport,
      errorTransport,
      consoleTransport,
      httpTransport,
    ],
    exceptionHandlers: [exceptionTransport],
  });
};

module.exports = devLogger;
