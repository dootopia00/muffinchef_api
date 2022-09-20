import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notepad } from '../entities/notepad.entity';

@Injectable()
export class NotepadService {
  constructor(
    @InjectRepository(Notepad)
    private notepadRepository: Repository<Notepad>,
  ){}


  findAll(): Promise<Notepad[]> {
    return this.notepadRepository.find();
  }

  findOne(id: number): Promise<Notepad> {
    return this.notepadRepository.findOneBy({id: id});
    // return this.notepadRepository.findOne({where: { id }});
  }

  async create(notepad: Notepad): Promise<void>{
    await this.notepadRepository.save(notepad);
  }

  async remove(id: number): Promise<void> {
    await this.notepadRepository.delete(id);
  }
}
