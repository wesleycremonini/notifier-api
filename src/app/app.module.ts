import { Module } from '@nestjs/common';
import { MessageModule } from 'src/api/message/message.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
