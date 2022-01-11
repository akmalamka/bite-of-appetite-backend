import Writing from '../models/Writing.js';
import Responses from '../utils/Responses.js';

export const getWritings = async (req, res) => {
  try {
    // const writing = await Writing.findAll();
    const writing = await Writing.findAll({
      attributes: ['title', 'description'],
    });
    // res.send(writing);
    return Responses.sendOk(res, writing);
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const getWritingById = async (req, res) => {
  try {
    const writing = await Writing.findByPk(req.params.id)
      .then((data) => {
        if (data) {
          // res.send(data);
          return Responses.sendOk(res, data);
        } else {
          // res.status(404).send({
          //   message: `Cannot find Tutorial with id=${id}.`
          // });
          return Responses.sendNotFound(res);
        }
      })
      .catch((err) => {
        // res.status(500).send({
        //   message: "Error retrieving Tutorial with id=" + id
        // });
        return Responses.handleAllError(res, err);
      });
    // const writing = await Writing.findAll({
    //   where: {
    //     id: req.params.id,
    //   },
    // });
    // res.send(writing[0]);
    // return Responses.sendOk(res, writing[0]);
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const createWriting = async (req, res) => {
  try {
    await Writing.create(req.body);
    // res.json({
    //   message: 'Writing Created',
    // });
    return Responses.sendOk(res, 'Writing Created');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const findWriting = async (req, res) => {
  const id = req.params.id;
  Tutorial.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Tutorial with id=' + id,
      });
    });
};

export const updateWriting = async (req, res) => {
  try {
    await Writing.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // res.json({
    //   message: 'Writing Updated',
    // });
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
    // res.json({
    //   message: 'Writing Deleted',
    // });
    return Responses.sendOk(res, 'Writing Deleted');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};
