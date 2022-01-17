import multer from 'multer';
// import Config from '../configs/Config';
import Responses from '../utils/Responses.js';

export const filenameSetting = (_req, file, cb) => {
  const filename = `[${new Date().toISOString()}]_${encodeURIComponent(
    file.originalname,
  )}`.replace(/[/\\?%*:|"<>]/g, '-');
  cb(null, filename);
};

const imageExtension = ['jpeg', 'jpg', 'png', 'JPG'];

export const checkImage = (_req, file, cb) => {
  const filenameSplit = file.originalname.split('.');
  const ext = filenameSplit[filenameSplit.length - 1];
  if (imageExtension.indexOf(ext) === -1) {
    return cb(new Error('File format not image'));
  }
  return cb(null, true);
};

export const imageStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'photos'),
  // destination: (_req, _file, cb) => cb(null, path.join(__dirname, '/uploads')),
  filename: filenameSetting,
});

// export const recipeImageStorage = multer.diskStorage({
//   destination: (_req, _file, cb) =>
//     cb(null, path.resolve('uploads', 'recipes')),
//   // destination: (_req, _file, cb) => cb(null, path.join(__dirname, '/uploads')),
//   filename: filenameSetting,
// });

export const imageLimits = {
  files: 1,
  //   fileSize: +Config.getEnv('IMAGE_SIZE_LIMIT'),
};

// export const recipeImageUploader = multer({
//   //   limits: writingImageLimits,
//   storage: recipeImageStorage,
//   fileFilter: checkImage,
// });

export const imageUploader = multer({
  //   limits: writingImageLimits,
  storage: imageStorage,
  fileFilter: checkImage,
});

// export const uploadImageRecipe = (req, res, next) => {
//   recipeImageUploader.single('image')(req, res, (err) => {
//     console.log('aaa');
//     console.log('req body ', req.body);
//     if (err) {
//       if (err.message === 'File too large')
//         return Responses.sendBadRequest(res, err.message);
//       return Responses.sendInternalError(res, `${err.name} : ${err.message}`);
//     }
//     next();
//   });
// };

export const uploadImage = (req, res, next) => {
  imageUploader.single('image')(req, res, (err) => {
    console.log('req body ', req.body);
    if (err) {
      if (err.message === 'File too large') {
        return Responses.sendBadRequest(res, err.message);
      }
      return Responses.sendInternalError(res, `${err.name} : ${err.message}`);
    }
    next();
  });
};
