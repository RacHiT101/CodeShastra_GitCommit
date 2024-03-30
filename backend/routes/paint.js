// import express from 'express';
// import { getAsianPaintsController, getAsianPaintsCost } from '../controllers/paint.controller.jsx';
// const getAsianPaintsController = require("../controllers/paint.controller.jsx")
// const getAsianPaintsCost = require("../controllers/paint.controller.jsx");

const router = require("express").Router();

router.post('/asian', async (req, res) => {
    try {
      const { typeOfProject, paintSpacing, homeSize, carpetArea } = req.body;
  
      const result = await asianPaintsCalculator(typeOfProject, paintSpacing, homeSize, carpetArea);
  
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
)
router.get('/asian-paints', async (req, res) => {
    try {
      const data = await getAsianPaints();
  
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
