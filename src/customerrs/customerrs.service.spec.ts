import { Test, TestingModule } from '@nestjs/testing';
import { CustomerrsService } from './customerrs.service';

describe('CustomerrsService', () => {
  let service: CustomerrsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerrsService],
    }).compile();

    service = module.get<CustomerrsService>(CustomerrsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
