import * as http from "http";
import {createExpressServer} from "routing-controllers"
import "reflect-metadata";
import {ErrorController} from "./error-controller";
import {Controller} from "./controller";
import * as express from "express";
import { requestLogging } from "./middleware/request-logging";

const SERVER_PORT = process.env.MOCK_PORT || 8000;
const STATIC_DIR = process.env.STATIC_DIR || 'static';

export class Server {

    private app!: any;
    private server!: any;

    constructor() {
    }

    public async run(): Promise<http.Server> {
        return this.startHttpServer();
    }

    public async stop(): Promise<void> {
        await this.stopHttpServer();
    }

    private startHttpServer(): Promise<http.Server> {
        return new Promise((resolve, reject) => {
            this.app = createExpressServer({
                controllers: [ErrorController, Controller],
                defaultErrorHandler: true,
            });
            this.app.use(requestLogging);
            this.app.use('/static', express.static(STATIC_DIR));
            this.server = this.app.listen(SERVER_PORT, () => {
                console.log('server running on *:'+SERVER_PORT);
                resolve(this.app);
            });
        });
    }

    private stopHttpServer(): Promise<void> {
        return new Promise<void>((resolve, rej) => {
            this.server.close((err: any) => {
                if (err) {
                    rej(err);
                } else {
                    resolve();
                }
            })
        });
    }
}
