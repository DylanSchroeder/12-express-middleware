'use strict';

// TODO: this is actually error

const debug = require('debug')('app:error');

export default (err, req, res, next) => {
  debug(err);

  if (req.headers['accept'] !== 'application/json') {
    next(err);
    return;
  }

  res.statusCode = 500;
  res.json({
    error: err.message,
  });
};