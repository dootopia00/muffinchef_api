import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notepad } from '../entities/notepad.entity';
import { NotepadController } from './notepad.controller';
import { NotepadService } from './notepad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notepad])],
  exports: [TypeOrmModule],
  controllers: [NotepadController],
  providers: [NotepadService]
})
export class NotepadModule {}
