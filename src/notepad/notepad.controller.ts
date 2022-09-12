import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Notepad } from '../entities/notepad.entity';
import { NotepadService } from './notepad.service';

@Controller('notepad')
export class NotepadController {
  constructor(private notepadService: NotepadService){};

  @Get()
  findAll(): Promise<Notepad[]>{
    return this.notepadService.findAll();
  }

  @Get()
  findOne(@Param('id') id: number): Promise<Notepad> {
    return this.notepadService.findOne(id);
  }

  @Post()
  create(@Body() notepad: Notepad){
    return this.notepadService.create(notepad);
  }

  @Delete(':id')
  remove(@Param('id') id: number){
    this.notepadService.remove(id);
  }


}
