import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:5173',
  });

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port);

  console.log(`Backend disponible en http://localhost:${port}/api`);
}

void bootstrap();

