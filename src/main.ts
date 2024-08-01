import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //add configuration object to limit access to cors ( otherwise open to public )
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
