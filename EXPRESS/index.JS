// index.js (Main Server File)
require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// middleware/logger.js (Middleware for Logging Requests)
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};
module.exports = logger;



// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

// controllers/productController.js

// README.md (Documentation)

// # Express.js Fundamentals Assignment


// ## Setup & Installation

// 1. Install Node.js using NVM

// 2. Clone this repository

// 3. Run `npm install` to install dependencies

// 4. Create a `.env` file and define `PORT=5000`

// 5. Start the server using `node index.js`


// ## API Endpoints

// ### Users

// - `GET /api/users` - Get all users

// - `POST /api/users` - Create a user

// - `PUT /api/users/:id` - Update a user

// - `DELETE /api/users/:id` - Delete a user


// ### Products

// - `GET /api/products` - Get all products

// - `POST /api/products` - Create a product

// - `PUT /api/products/:id` - Update a product

// - `DELETE /api/products/:id` - Delete a product
