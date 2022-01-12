import multer from 'multer';
import path from 'path';
// import Config from '../configs/Config';
import Responses from '../utils/Responses.js';

export const filenameSetting = (_req, file, cb) => {
  const filename = `[${new Date().toISOString()}]_${encodeURIComponent(
    file.originalname,
  )}`.replace(/[/\\?%*:|"<>]/g, '-');
  cb(null, filename);
};

const imageExtension = ['jpeg', 'jpg', 'png'];

export const checkImage = (_req, file, cb) => {
  const filenameSplit = file.originalname.split('.');
  const ext = filenameSplit[filenameSplit.length - 1];
  if (imageExtension.indexOf(ext) === -1)
    return cb(new Error('File format not image'));
  return cb(null, true);
};

export const writingImageStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, path.resolve('uploads', 'image')),
  // destination: (_req, _file, cb) => cb(null, path.join(__dirname, '/uploads')),
  filename: filenameSetting,
});

export const writingImageLimits = {
  files: 1,
  //   fileSize: +Config.getEnv('IMAGE_SIZE_LIMIT'),
};

export const writingImageUploader = multer({
  //   limits: writingImageLimits,
  storage: writingImageStorage,
  fileFilter: checkImage,
});

export const uploadImage = (req, res, next) => {
  writingImageUploader.single('image')(req, res, (err) => {
    console.log('req body', req.body);
    console.log('req body', req.file);
    if (err) {
      // console.log('err ', err);
      if (err.message === 'File too large')
        return Responses.sendBadRequest(res, err.message);
      return Responses.sendInternalError(res, `${err.name} : ${err.message}`);
    }
    next();
  });
};
