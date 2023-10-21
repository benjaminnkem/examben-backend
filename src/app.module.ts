import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerrsModule } from './customerrs/customerrs.module';

@Module({
  imports: [CustomerrsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
