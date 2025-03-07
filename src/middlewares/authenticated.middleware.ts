import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedException } from "../utils/error";
import { config } from "../configs/app.config";
import { IJwtPayload } from "../modules/auth/auth.interface";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  // Check if user is authenticated
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new UnauthorizedException("Unauthorized access");
  }

  // Set user in request object
  const decodedUser = jwt.verify(token, config.JWT_SECRET) as IJwtPayload;
  if (!decodedUser) {
    throw new UnauthorizedException("Unauthorized access");
  }

  req.user = { id: decodedUser.id };
  next();
};

export default isAuthenticated;
