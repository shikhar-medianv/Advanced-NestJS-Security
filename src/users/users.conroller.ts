import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, RawBody, Redirect, Req } from "@nestjs/common";
import express from "express"
import { url } from "inspector";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./users.service";
import { ParseIntPipe } from '@nestjs/common';

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
    addVideo(@Body() body: any) {
        return body.name
    }

    // CRUD
    constructor(private userService: UserService) { }


    @Post()
    createUser(@Body() createUserDto: CreateUserDTO) {
        this.userService.addUser(createUserDto)
        return { message: "USER ADDED" }
    }

    @Get()
    findAllUsers() {
        return this.userService.getUsers()
    }

    @Get(':id')
    findUser(@Param('id') id: string) {
        const user = this.userService.getUser(Number(id))

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return user
    }


    @Put(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: CreateUserDTO) {
        this.userService.updateUser(id, updateUserDto)
        return { message: 'USER UPDATED' }
    }

    @Delete(":id")
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        this.userService.deleteUser(id)
        return { message: 'USER DELETED' }
    }




}