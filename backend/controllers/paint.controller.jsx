const getAsianPaints = require("../utils/asianPaints.js");
const asianPaintsCalculator = require("../utils/asianPaintsCalculator.js");

const getAsianPaintsCost = async (req, res) => {
  try {
    const { typeOfProject, paintSpacing, homeSize, carpetArea } = req.body;

    const result = await asianPaintsCalculator(typeOfProject, paintSpacing, homeSize, carpetArea);

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAsianPaintsCost };

const getAsianPaintsController = async (req, res) => {
  try {
    const data = await getAsianPaints();

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { getAsianPaintsController};