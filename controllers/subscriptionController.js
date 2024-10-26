const Subscription = require('../models/Subscription'); 
exports.createSubscription = async (req, res) => { 
	const { email } = req.body; 
	const newSubscription = new Subscription({ email }); 
	try { 
		const savedSubscription = await newSubscription.save(); 
		res.status(201).json(savedSubscription); 
	} catch (error) { 
		res.status(400).json({ message: error.message }); 
	} 
};
