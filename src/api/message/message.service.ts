import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly httpService: HttpService) {}

  async send(messageDto: MessageDto) {
    console.log(messageDto);
    await this.httpService
      .get('http://notifier-go-service:8080/message/send')
      .subscribe((response) => console.log(response.data));
    return 'This action adds a new message';
  }
}
