import { Test, TestingModule } from '@nestjs/testing';
import { ViewResolver } from './view.resolver';

describe('ViewResolver', () => {
  let resolver: ViewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewResolver],
    }).compile();

    resolver = module.get<ViewResolver>(ViewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
