const { Plant } = require('../models');

exports.create = (req, res) => {
    Plant.create(req.body).then(plant => res.status(201).json(plant));
};

exports.list = (req, res) => {
    Plant.findAll().then(plant => res.status(200).json(plant));
};

exports.updateById = (req, res) => {
    const { id } = req.params;
    console.log("update by id:", id);
    Plant.update(req.body, { where: { id }}).then(([updatedPlant]) => {
        if (!updatedPlant) {
        res.status(404).json({ error: 'The plant could not be found.'});
        } else {
        res.status(200).json(updatedPlant);
        }
    });
};

exports.deleteById = (req, res) => {
    const { plantId } = req.params;
    Plant.destroy({ where: { plantId }}).then(([updatedPlant]) => {
        if (!updatedPlant) {
            res.status(404).json({ error: 'The plant could not be found.'});    
        } else {
            res.status(204).json(updatedPlant);
        }
    });
};