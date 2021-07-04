import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EstudianteSchema } from './schemas/estudiantes.schema';

//Se regsitran todos los componentes que 'estudiantes' va a manejar
@Module({
    imports:[MongooseModule.forFeature([{name:'Estudiantes',schema:EstudianteSchema}])],
    providers: [EstudiantesService],
    controllers: [EstudiantesController],
})
export class EstudiantesModule {}
