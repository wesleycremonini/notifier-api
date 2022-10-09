import { Controller, Post, Body } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  send(@Body() messageDto: MessageDto) {
    return this.messageService.send(messageDto);
  }
}
