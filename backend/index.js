// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const socketio = require('socket.io');
const userRoutes = require('./routes/userRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const chatRoutes = require('./routes/chatRoute');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// Mongoose connection setup
mongoose.connect("mongodb+srv://rachitgala05:rachitgala05@cluster0.j1uqmok.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api', userRoutes);
app.use('/api', recruiterRoutes);
app.use('/api', jobRoutes);
app.use('/api', applicationRoutes);
app.use('/api', chatRoutes);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const io = socketio(server, { pingTimeout: 60000 });
require('./configurations/socket')(io);