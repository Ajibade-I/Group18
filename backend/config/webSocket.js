const socketIo = require('socket.io');

let io;

const initSocket = (server) => {
  io = socketIo(server, {
    cors: {
      origin: "*", // Update this in production to allow only your frontend
      methods: ["GET", "POST"],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Send a welcome message to the user
    socket.emit('welcome', 'Welcome to the real-time system');

    // Listen for client events
    socket.on('notify', (data) => {
      console.log('Notification from client:', data);
      io.emit('notification', data); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};

// Function to emit events from other parts of the app
const emitEvent = (eventName, data) => {
  if (io) {
    io.emit(eventName, data);
  }
};

module.exports = { initSocket, emitEvent };
