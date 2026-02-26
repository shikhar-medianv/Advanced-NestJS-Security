import { Module } from '@nestjs/common';
import { UserController } from './users.conroller';
import { UserService } from './users.service';
import { ConfigService } from '@nestjs/config';


@Module({
    controllers: [UserController],
    providers: [UserService],
    // Custom and Async Providers
    // providers: [UserService, {
    //     provide: 'DB_CONNECTION',
    //     useFactory: async (configService: ConfigService) => {
    //         return createConnection({
    //             type: 'postgres',
    //             host: configService.get('DB_HOST'),
    //             port: 5432,
    //             username: 'user',
    //             password: 'password',
    //             database: 'test',
    //         });
    //     },
    //     inject: [ConfigService],
    // },],


})
export class UsersModule {

}
