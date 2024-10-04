import express from 'express';
import multer from 'multer';
import Issue from '../models/issue.js';
import path from 'path';
import fs from 'fs';

const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir);
}

const router = express.Router();

// Configuring multer storage for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Destination folder for uploads
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Ensure unique filenames
    }
  });
  
const upload = multer({ storage: storage });

// Route to handle community issue creation
router.post('/api/community-issues', upload.single('picture'), async (req, res) => {
    const { title, description, location, contacted, username, phone, email, status } = req.body;

    try {
      const newIssue = await Issue.create({
        title,
        description,
        location: JSON.parse(location), // Parse the JSON string to object
        contacted,
        username,
        phone,
        email,
        status,
        picture: req.file ? req.file.path : null, // Save the file path if an image was uploaded
      });

      res.status(201).json(newIssue);
    } catch (error) {
      console.error('Error creating community issue:', error);
      res.status(500).json({ message: 'Failed to create community issue' });
    }
});

export default router;
