import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfig } from './configuration/api.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
      logger: ['debug', 'error', 'verbose', 'log', 'warn']
  });

  // Validator PIPE
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
    .setTitle(AppConfig.title)
    .setDescription(AppConfig.description)
    .addServer(process.env.API_URL)
    .setVersion(AppConfig.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('doc', app, document);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.setGlobalPrefix(AppConfig.basePath);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
