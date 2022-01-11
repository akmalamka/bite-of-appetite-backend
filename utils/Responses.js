const sendOk = (res, obj = true) =>
  res.status(200).json({ code: 200, message: 'Ok', data: obj });

const sendCreated = (res, obj = true) =>
  res.status(201).json({ code: 201, message: 'Created', data: obj });

const sendBadRequest = (res, obj = true) =>
  res.status(400).json({ code: 400, message: 'Bad request', error: obj });

const sendUnauthorized = (res, obj = true) =>
  res.status(401).json({ code: 401, message: 'Unauthorized', error: obj });

const sendForbidden = (res, obj = true) =>
  res.status(403).json({ code: 403, message: 'Forbidden', error: obj });

const sendNotFound = (res, obj = true) =>
  res.status(404).json({ code: 404, message: 'Not Found', error: obj });

const sendConflict = (res, obj = true) =>
  res.status(409).json({ code: 409, message: 'Conflict', error: obj });

const sendInternalError = (res, obj = true) =>
  res
    .status(500)
    .json({ code: 500, message: 'Internal server error', error: obj });

const handleAllError = (res, err) => {
  return sendInternalError(res, `${err.name} : ${err.message}`);
};

const handleWriteError = (res, err) => {
  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeDatabaseError' ||
    err.message === 'Password is empty'
  )
    return sendBadRequest(res);
  if (
    err.name === 'SequelizeUniqueConstraintError' ||
    err.message === 'Actroom conflict with another actroom(s)'
  )
    return sendConflict(res);
  return handleAllError(res, err);
};

export default {
  sendOk,
  sendCreated,
  sendBadRequest,
  sendUnauthorized,
  sendForbidden,
  sendNotFound,
  sendConflict,
  sendInternalError,
  handleAllError,
  handleWriteError,
};
