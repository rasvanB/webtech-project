const unknownEndpoint = (_, res, next) => {
  res.status(404).json({ error: "unknown endpoint" });
  next();
};

module.exports = unknownEndpoint;
