const mongoose = require('mongoose'); 
const dbURI = process.env .MONGOD_URI || 'mongodb://localhost:27017/DJCDB'
const connectDB = async () => {
	try {
		await mongoose.connect(dbURI);
	console.log('Conectado a MongoDb');
} catch (error) {
	console.error('error al conectar con mongodb',error);
	process.exit(1)
}};
module.exports = connectDB;