import Writing from '../models/Writing.js';

export const getWritings = async (req, res) => {
  try {
    const writing = await Writing.findAll();
    res.send(writing);
  } catch (err) {
    console.log(err);
  }
};

export const getWritingById = async (req, res) => {
  try {
    const writing = await Writing.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(writing[0]);
  } catch (err) {
    console.log(err);
  }
};

export const createWriting = async (req, res) => {
  try {
    await Writing.create(req.body);
    res.json({
      message: 'Writing Created',
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateWriting = async (req, res) => {
  try {
    await Writing.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Writing Updated',
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteWriting = async (req, res) => {
  try {
    await Writing.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Writing Deleted',
    });
  } catch (err) {
    console.log(err);
  }
};
