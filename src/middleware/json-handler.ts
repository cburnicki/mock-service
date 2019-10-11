import { Request, Response, NextFunction } from "express";

export function jsonHandler(req: Request, res: Response, next: NextFunction) {
    if (!req.url.startsWith('/json')) {
        next();
        return;
    }
    if (req.method === 'GET') {
        res.json(req.query);
    } else {
        res.json(req.body);
    }
    next();
}