import { Controller, Post, Body } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('send')
  send(@Body() messageDto: MessageDto) {
    console.log('aaad');
    return this.messageService.send(messageDto);
  }
}
