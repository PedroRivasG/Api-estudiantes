import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { Estudiantes } from './estudiantes.interface';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {

    constructor(private readonly servicio: EstudiantesService) {}

  @Get()
  ObtenerTodos(): Promise<Estudiantes[]> {
    return this.servicio.todos();
  }

  @Get()
  ObtenerUno(@Param('id') id): Promise<Estudiantes[]> {
    return this.servicio.todos();
  }
 
  @Post()
  crear(@Body() body: Estudiantes): Promise<Estudiantes> {
    return this.servicio.crear(body);
  }
  
  @Put(':id')
  actualizar(@Param('id') id,@Body() estudiante:Estudiantes):Promise<Estudiantes>
  {
    return this.servicio.update(id,estudiante);
  }
 
  @Delete(':id')
  delete(@Param('id') id):Promise<Estudiantes>
  {
    return this.servicio.delete(id);
  }

  

}