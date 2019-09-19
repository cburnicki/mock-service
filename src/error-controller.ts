import {Get, HttpError, JsonController, Param, Post} from "routing-controllers";

@JsonController('/error')
export class ErrorController {

    @Get('/:code')
    async getError(@Param('code') code: number) {
        console.log('GET /error '+code);
        throw new HttpError(code);
    }

    @Post('/:code')
    async postError(@Param('code') code: number) {
        console.log('POST /error '+code);
        throw new HttpError(code);
    }

}
