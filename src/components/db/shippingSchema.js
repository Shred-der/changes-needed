import { Schema, model } from 'mongoose';

const shippingSchema = new Schema({
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

const Shipping = model('Shipping', shippingSchema);

export default Shipping;