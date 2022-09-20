import { Test, TestingModule } from '@nestjs/testing';
import { NotepadService } from './notepad.service';

describe('NotepadService', () => {
  let service: NotepadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotepadService],
    }).compile();

    service = module.get<NotepadService>(NotepadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
