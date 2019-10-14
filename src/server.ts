import * as http from "http";
import { requestLogging } from "./middleware/request-logging";
import { jsonHandler } from "./middleware/json-handler";
import { statusResponseHandler } from "./middleware/status-response-handler";
import bodyParser = require("body-parser");
import { delayHandler } from "./middleware/delay-handler";
const express = require('express');

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
            this.app = express();
            this.app.use(bodyParser.json());
            this.app.use(requestLogging);
            this.app.use(delayHandler);
            this.app.use(jsonHandler);
            this.app.use('/status/:code', statusResponseHandler);
            this.app.use('/static', express.static(STATIC_DIR));
            this.server = this.app.listen(SERVER_PORT, () => {
                console.log('server running on *:' + SERVER_PORT);
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
