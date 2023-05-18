import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed: Unauthorized' });
  }

  try {
    jwt.verify(token, process.env.token as string);

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Authentication failed: invalid token' });
  }
};

export default authenticate;
