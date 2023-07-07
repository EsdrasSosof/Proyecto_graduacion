import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { AppConfig } from './configuration/api.config';
import { AuthGuard } from './auth/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
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
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
