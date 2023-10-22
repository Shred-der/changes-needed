const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

const Shipping = mongoose.model('Shipping', shippingSchema);

module.exports = Shipping;