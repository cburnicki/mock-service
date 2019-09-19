import {Body, Get, JsonController, Post, QueryParams} from "routing-controllers";

@JsonController('/json')
export class Controller {

    @Get()
    async getSomeJson(@QueryParams() queryParams: any) {
        console.log('GET /json', queryParams);
        return queryParams;
    }

    @Post()
    async postSomeJson(@Body() body: any) {
        console.log('POST /json', body);
        return body;
    }
}
