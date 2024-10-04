// Logs all incoming requests

const logger = (req, _res, next) => {
  console.log(
    `${req.method} ${req.originalUrl} at ${new Date().toISOString()}`,
  );
  next();
};

export default logger;
