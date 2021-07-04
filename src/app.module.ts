import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@Module({
    imports: [EstudiantesModule,MongooseModule.forRoot('mongodb+srv://PedroG:k0ywsDTqs3Gol7Gj@estudiates-api.klosa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
    controllers: [AppController],
    providers: [AppService],
})
  

export class AppModule {}
