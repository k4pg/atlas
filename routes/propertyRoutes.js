const express = require("express");
const {
  createProperty,
  getProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const router = express.Router();

// CRUD routes for properties
router.post("/properties", createProperty);
router.get("/properties", getProperties);
router.get("/properties/:id", getPropertyById);
router.put("/properties/:id", updateProperty);
router.delete("/properties/:id", deleteProperty);

module.exports = router;
