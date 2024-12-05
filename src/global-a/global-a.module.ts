import { Global, Module } from '@nestjs/common';
import { GlobalAService } from './global-a.service';
import { GlobalAController } from './global-a.controller';
// 全局模块
@Global()
@Module({
  controllers: [GlobalAController],
  providers: [GlobalAService],
  exports: [GlobalAService],
})
export class GlobalAModule {}
