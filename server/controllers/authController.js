import bcrypt from 'bcrypt';
import User from '../models/User.js'; 

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  console.log('Incoming registration request:', { email, password });

  try {
    // Check if user already exists using Sequelize
    const userExists = await User.findOne({ where: { email } });
    console.log('User exists:', userExists);

    if (userExists) {
      return res.status(400).json({ exists: true, message: 'User already exists' });
    }

    // Hash the password before saving it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Hashed password:', hashedPassword);

    // Create new user with Sequelize
    const newUser = await User.create({ email, password: hashedPassword });
    console.log('New user created:', newUser);

    res.status(201).json({ exists: false, message: 'User registered successfully!', user: newUser });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'An error occurred during sign-up' });
  }
};

export { registerUser };
