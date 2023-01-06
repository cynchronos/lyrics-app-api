import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'

ConfigModule.forRoot()

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URI),
    ],
})
export class DatabaseModule { }
