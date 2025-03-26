const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const {verifyToken, isAdmin} = require('./authMiddleware'); //ROLE BASED ACCESS TO ROUTES
const cors = require('cors');
const rateLimit = require('express-rate-limit'); //Rate limiter
dotenv.config();

const app = express();
app.use(express.json());

// ROLE-BASED ACCESS TO ROUTES
app.get('/admin', verifyToken, isAdmin, (req, res) => {
    res.send('Admin Area');
});
app.get('/user', verifyToken, (req, res) => {
    res.send('User Area');
});

// app.use(cors()) USE THIS TO ALLOW ALL ORIGINS
app.use(cors( 
    {
        origin: ['https://localhost:3000', 'https://localhost:8100'],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
));

// USING EXPRESS RATE LIMIT
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,  // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);


const users = []; // Example users storage

// Register Route
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword, role: role || 'user' };
    users.push(newUser);
    res.status(201).send("User Registered");
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Protected Route
app.get('/protected', (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(403).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ message: "Protected Data", user: decoded.username });
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
