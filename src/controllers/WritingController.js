import fs from 'fs';
import Writing from '../models/Writing.js';
import Responses from '../utils/Responses.js';
import { api } from '../utils/const.js';

export const getWritings = async (req, res) => {
  try {
    const writing = await Writing.findAll({
      attributes: ['id', 'title', 'description', 'image'],
    });
    return Responses.sendOk(res, writing.reverse());
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
    await Writing.findOne({
      order: [['id', 'DESC']],
    }).then((data) => {
      return Responses.sendOk(res, data);
    });
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const updateWriting = async (req, res) => {
  try {
    await Writing.update(
      {
        description: req.body.description,
        title: req.body.title,
        writingsBy: req.body.writingsBy,
        story: req.body.story,
        date: req.body.date,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return Responses.sendOk(res, 'Writing Updated');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const deleteWriting = async (req, res) => {
  try {
    await Writing.destroy({
      where: {
        id: req.params.id,
      },
    });
    return Responses.sendOk(res, 'Writing Deleted');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const uploadWritingImage = async (req, res) => {
  try {
    const imageUrl = req.file.filename;

    await Writing.update(
      { image: `${api}/${imageUrl}` },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return Responses.sendOk(res, 'Image Updated');
  } catch (err) {
    return Responses.handleWriteError(res, err);
  }
};

export const deleteWritingImage = async (req, res) => {
  const dir = 'photos/';
  const data = await Writing.findByPk(req.params.id);
  try {
    fs.unlinkSync(dir + data.image.slice(api.length + 1));
    //file removed
    return Responses.sendOk(res, 'Writing Image Deleted');
  } catch (err) {
    return Responses.handleWriteError(res, err);
  }
};
