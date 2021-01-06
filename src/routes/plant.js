const express = require('express');

const router = express.Router();
const plantController = require('../controllers/plant');

router
  .route('/')
  .get(plantController.getPlant)
  .post(plantController.createPlant);

// router
//   .route('/:id')
//   .get(plantController.getPlantById)
//   .patch(plantController.updatePlant)
//   .delete(plantController.deletePlant);

module.exports = router;