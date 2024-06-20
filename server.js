// Modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
require('dotenv').config();

// Created server
const app = express();
const http = http.createServer(app);
const io = socketIo(server);

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Server On
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server listen on port: ${PORT}`));