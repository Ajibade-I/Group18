const path = require('path');
const multer = require('multer');

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes'); // Save in 'uploads/resumes' folder
  },
  filename: function (req, file, cb) {
    // Generate a unique name for the file
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Multer Middleware to handle single file upload (resume)
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
}).single('resume'); // Expecting the file field to be named 'resume'


module.exports = upload;
