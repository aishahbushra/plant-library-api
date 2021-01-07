const { Plant } = require('../models');

exports.create = (req, res) => {
    Plant.create(req.body).then(plant => res.status(201).json(plant));
};

exports.list = (req, res) => {
    Plant.findAll().then(plant => res.status(200).json(plant));
};