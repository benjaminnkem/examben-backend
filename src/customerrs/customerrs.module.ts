import { Module } from '@nestjs/common';
import { CustomerrsService } from './customerrs.service';
import { CustomerrsController } from './customerrs.controller';

@Module({
  controllers: [CustomerrsController],
  providers: [CustomerrsService],
})
export class CustomerrsModule {}
