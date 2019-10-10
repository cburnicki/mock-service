import {Get, HttpError, JsonController, Param, Post} from "routing-controllers";

@JsonController('/error')
export class ErrorController {

    @Get('/:code')
    async getError(@Param('code') code: number) {
        throw new HttpError(code);
    }

    @Post('/:code')
    async postError(@Param('code') code: number) {
        throw new HttpError(code);
    }

}
