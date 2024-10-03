import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const secretKey = process.env.JWT_SECRET;

        jwt.verify(token, secretKey, async (error, user) => {
            if (error) {
                return res.sendStatus(403); // Send forbidden status if token invalid
            }

            try {
                const existingUser = await User.findByPk(user.id);
                if (!existingUser) {
                    return res.sendStatus(403); //User does not exist
                }

                req.user = existingUser; // Attaches user info to object
                return next();
            } catch (error) {
                console.error(error);
                return res.sendStatus(500);
            }
        });
    } else {
        res.sendStatus(401); // Send unauthorized status if no token provided
    }
};