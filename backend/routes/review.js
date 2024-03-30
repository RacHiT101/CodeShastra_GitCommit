const Review = require("../models/Review");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifytoken");
const cryptojs = require("crypto-js");

const router = require("express").Router();

//create product
router.post("/",  async (req, res) => {
    const review = new Review(req.body);
    try{
        const savedreview = await review.save();
        res.status(200).json(savedreview);

    }
    catch(err){ 
    res.status(500).json(err);
    }

})
//update the product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete the product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

//get the products
router.get("/:productId", async (req, res) => {
    try {
      const productId = req.params.productId;
      const reviews = await Review.find({ productId });
      res.status(200).json(reviews);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get all products
router.get("/",  async (req, res) => {
  try {
    const review = await Review.findById();

    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});
