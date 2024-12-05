import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PersonModule } from './person/person.module';
import { GlobalAModule } from './global-a/global-a.module';
import { GlobalBModule } from './global-b/global-b.module';

@Module({
  imports: [PostsModule, PersonModule, GlobalAModule, GlobalBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
