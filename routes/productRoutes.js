const express = require('express'); 
const product = require('../moodels/product'); 
const router = express.Router(); 
router.get('/', async (req, res) => {
	try {
		const product = await product.find();
		res.json(product);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
}); 
router.post('/', async (req, res) => {
	const { name, image, description } = req.body;
	const newProduct = new Product ({ name, image, description });
	try {
		const savedProduct = await newProduct.save();
		res.status(201).json(savedProduct);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
