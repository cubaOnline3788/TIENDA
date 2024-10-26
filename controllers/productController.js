const Product = require('../models/Product'); 
exports.getProducts = async (req, res) => { 
	try { 
		const products = await Product.find(); res.json(products); 
	} catch (error) { 
		res.status(500).json({ message: error.message }); 
	} 
}; 
exports.createProduct = async (req, res) => { 
	const { name, image, description } = req.body; 
	const newProduct = new Product({ name, image, description }); 
	try { 
		const savedProduct = await newProduct.save(); res.status(201).json(savedProduct); 
	} catch (error) { 
		res.status(400).json({ message: error.message }); 
	} 
};