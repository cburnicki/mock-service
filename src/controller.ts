import {Body, Get, JsonController, Post, QueryParams} from "routing-controllers";

@JsonController('/json')
export class Controller {

    @Get()
    async getSomeJson(@QueryParams() queryParams: any) {
        return queryParams;
    }

    @Post()
    async postSomeJson(@Body() body: any) {
        return body;
    }
}
