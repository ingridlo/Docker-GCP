import { Request, Response, NextFunction } from "express";
import config from "./config";

export const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];    
    try {
        if (token === undefined) {
            return res.status(401).json({ message: "Acceso no autorizado" });
        } else {
            const decodeValue = await config.admin.auth().verifyIdToken(token!);            
            if (decodeValue != null || decodeValue != undefined) {
                return next();
            }
            return res.json({ message: "Acceso no autorizado" });
        }
    } catch (error) {
       
        return res.json({ message: "Internal Server Error" }).status(500);
    }
}

