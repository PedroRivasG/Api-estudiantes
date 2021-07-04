import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Documentacion
  const config = new DocumentBuilder()
    .setTitle('API MODULO 3')
    .setDescription('Esta Api es la practica del modulo 3')
    .setVersion('1.0')
    .addTag('Estudiantes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);
  //Documentacion

  await app.listen(3000);
}
bootstrap();
