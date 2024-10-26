const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const connectDB = require('./config/db'); 
const productRoutes = require('./routes/productRoutes'); 
const subscriptionRoutes = require('./routes/subscriptionRoutes'); 
require('dotenv').config(); 
const app = express(); 
connectDB(); 
app.use(cors({
	origin:'https://cubaonline3788.github.io/TIENDA---DJC/'
}); 
app.use(bodyParser.json()); 
app.use('/api/products', productRoutes); 
app.use('/api/subscriptions', subscriptionRoutes); 
app.use(express.static('public')); 
const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => { 
 	console.log(`Server running on port ${PORT}`);
 	 });
