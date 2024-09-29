import { Router } from 'express';
import { User } from '../models/user.js'; // rename with init
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ // rename with init
            where: { email },
        });
        if (!user) {
            return res.status(401).json({ message: 'Login failed' });
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).json({ message: 'Login failed' });
        }

        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            throw new Error('JWT secret key not defined');
        }

        const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

        return res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const router = Router();
router.post('/login', login); // Use auth/login to test
export default router;