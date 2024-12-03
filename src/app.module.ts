import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [PostsModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
