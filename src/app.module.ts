import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SomethingModule } from './something/something.module';

@Module({
  imports: [UsersModule, SomethingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
