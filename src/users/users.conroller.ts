import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect, Req } from "@nestjs/common";
import express from "express"
import { url } from "inspector";

interface QueryParams {
    id: number;
    name: string
}

@Controller("/users")
export class UserController {

    // Route Parameters
    @Get('/videos/:id/:name')
    getVideos(@Param('name') param: any) {
        return param
    }

    // Query Parameters
    @Get('/images')
    getimages(@Query() query: QueryParams) {
        console.log(query.id)
        return 'success'
    }

    @Get('/profile')
    // @HttpCode(200)
    @Redirect()
    getProfile() {
        const rn = (Math.random() * 10 + 1)
        if (rn < 5) {
            return {
                url: '/users/account',
                statusCode: 303
            }
        }
        else {
            return {
                url: '/users/wallet',
                statusCode: 301
            }
        }
        return "Hello hi"
    }

    @Get('/account')
    redirectRoute() {
        return "You are getting redirected to account"
    }
    @Get('/wallet')
    redirectWallet() {
        return "You are getting redirected to wallet"
    }

    // POST
    @Post('/video')
    addVideo(@Body() body:any){
        return body.name
    }


}