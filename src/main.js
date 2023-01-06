const { NestFactory }  = require('@nestjs/core');
const { AppModule } =  require('./app.module');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(`App Listen to Port ${process.env.PORT}`);
}
bootstrap();
