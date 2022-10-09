import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  send(messageDto: MessageDto) {
    return 'This action adds a new message';
  }
}
