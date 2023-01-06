const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const {ConfigModule} = require('@nestjs/config');

ConfigModule.forRoot()

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URI),
    ],
})
export class DatabaseModule { }
