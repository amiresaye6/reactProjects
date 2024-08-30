import express from 'express';
import { Product } from '../models/products.model.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.category ||
      !request.body.new_price ||
      !request.body.old_price ||
      !request.body.imgUrl
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    const newProduct = {
      name: request.body.name,
      category: request.body.category,
      new_price: request.body.new_price,
      old_price: request.body.old_price,
      imgUrl: request.body.imgUrl
    };

    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const product = await Product.find({});

    return response.status(200).json({
      count: product.length,
      data: product,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const product = await Product.findById(id);

    return response.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.category ||
      !request.body.new_price ||
      !request.body.old_price ||
      !request.body.imgUrl
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Product.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'product not found' });
    }

    return response.status(200).send({ message: 'product updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Product not found' });
    }

    return response.status(200).send({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
