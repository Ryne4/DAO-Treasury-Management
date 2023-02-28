import { Test, TestingModule } from '@nestjs/testing';
import { ContractGeneratorService } from './contract-generator.service';

describe('ContractGeneratorService', () => {
  let service: ContractGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractGeneratorService],
    }).compile();

    service = module.get<ContractGeneratorService>(ContractGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
