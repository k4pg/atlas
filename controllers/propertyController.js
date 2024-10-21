const Property = require("../models/propertyModel");

// Create a new property (POST /properties)
exports.createProperty = async (req, res) => {
  const {
    title,
    description,
    location,
    pricePerNight,
    amenities,
    maxGuests,
    host,
  } = req.body;

  try {
    const newProperty = new Property({
      title,
      description,
      location,
      pricePerNight,
      amenities,
      maxGuests,
      host,
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: "Error creating property" });
  }
};

// Get all properties (GET /properties)
exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Error fetching properties" });
  }
};

// Get a single property (GET /properties/:id)
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Error fetching property" });
  }
};

// Update a property (PUT /properties/:id)
exports.updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: "Error updating property" });
  }
};

// Delete a property (DELETE /properties/:id)
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({ message: "Property deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting property" });
  }
};
