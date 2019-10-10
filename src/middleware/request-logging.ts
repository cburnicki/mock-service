import { Request, Response, NextFunction } from 'express';

export function requestLogging(req: Request, res: Response, next: NextFunction) {
    console.log(new Date().toISOString() + ' ' + req.method + ' @ ' + req.url);
    console.log('HEADERS:');
    for (const [key, value] of Object.entries(req.headers)) {
        console.log('  ' + key + ': ' + value);
    }
    console.log('\n');
    next();
}