import { Controller, Get } from "@nestjs/common";

@Controller("/users")
export class UserController {

    @Get('/profile')
    getProfile() {
        return "This is Me"
    }
}