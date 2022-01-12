import Writing from '../models/Writing.js';
import Responses from '../utils/Responses.js';

export const getWritings = async (req, res) => {
  try {
    const writing = await Writing.findAll({
      attributes: ['id', 'title', 'description', 'image'],
    });
    return Responses.sendOk(res, writing);
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const getWritingById = async (req, res) => {
  try {
    await Writing.findByPk(req.params.id)
      .then((data) => {
        if (data) {
          return Responses.sendOk(res, data);
        } else {
          return Responses.sendNotFound(res);
        }
      })
      .catch((err) => {
        return Responses.handleAllError(res, err);
      });
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const createWriting = async (req, res) => {
  try {
    await Writing.create(req.body);
    return Responses.sendOk(res, 'Writing Created');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const updateWriting = async (req, res) => {
  try {
    await Writing.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return Responses.sendOk(res, 'Writing Updated');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const deleteWriting = async (req, res) => {
  try {
    await Writing.destroy({
      // truncate: true,
      // cascade: false,
      // restartIdentity: true,
      where: {
        id: req.params.id,
      },
    });
    return Responses.sendOk(res, 'Writing Deleted');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

// export default {
//   getWritings,
//   getWritingById,
//   createWriting,
//   updateWriting,
//   deleteWriting,
// };
