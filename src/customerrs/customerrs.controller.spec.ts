import { Test, TestingModule } from '@nestjs/testing';
import { CustomerrsController } from './customerrs.controller';
import { CustomerrsService } from './customerrs.service';

describe('CustomerrsController', () => {
  let controller: CustomerrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerrsController],
      providers: [CustomerrsService],
    }).compile();

    controller = module.get<CustomerrsController>(CustomerrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
