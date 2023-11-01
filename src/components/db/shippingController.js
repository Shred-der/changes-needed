import Shipping from './shippingSchema';

// POST /api/shipping
const createShipping = async (req, res) => {
  try {
    // this should get the shipping info from the user form
    const { name, address, city, country } = req.body;

    const shipping = new Shipping({
      name,
      address,
      city,
      country
    });

    const savedShipping = await shipping.save();

    res.status(201).json(savedShipping);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save shipping details' });
  }
};

export default {
  createShipping
};