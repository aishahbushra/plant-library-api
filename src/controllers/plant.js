const { Plant } = require('../models');

const getPlant = (_, res) => {
  Plant.findAll().then(plant => {
    res.status(200).json(plant);
  });
}

const createPlant = (req, res) => {
    const newPlant = req.body;
  
    Plant
      .create(newPlant)
      .then(newPlantCreated => res.status(201).json(newPlantCreated))
      .catch(error => {
        console.log(error);
        if (error.errors[0].type === 'Validation error' || 'notNull Violation') {
          res.status(400).json(error.message);
        }
        else { res.status(500).json(error) };
      });
  };

module.exports = {
    getPlant,
    createPlant,
  }