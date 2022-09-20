import { Test, TestingModule } from '@nestjs/testing';
import { NotepadController } from './notepad.controller';

describe('NotepadController', () => {
  let controller: NotepadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotepadController],
    }).compile();

    controller = module.get<NotepadController>(NotepadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
