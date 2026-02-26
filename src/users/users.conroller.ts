import { Controller, Get, HttpCode, Redirect, Req } from "@nestjs/common";
import express from "express"
import { url } from "inspector";

@Controller("/users")
export class UserController {

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
}