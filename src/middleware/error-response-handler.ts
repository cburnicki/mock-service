import { Request, Response, NextFunction } from "express";

export function errorResponseHandler(req: Request, res: Response, next: NextFunction) {
    if (!req.url.startsWith('/status/')) {
        next();
        return;
    }
    const code = (req.url.split('/').pop() || 500) as number;
    res.status(code);
    res.send();
}