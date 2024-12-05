import { Module } from '@nestjs/common';
import { GlobalBService } from './global-b.service';
import { GlobalBController } from './global-b.controller';

@Module({
  controllers: [GlobalBController],
  providers: [GlobalBService],
  imports: [],
})
export class GlobalBModule {}
