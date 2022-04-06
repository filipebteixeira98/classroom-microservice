import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { TestController } from './test.controller';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [TestController],
})
export class HttpModule {}
