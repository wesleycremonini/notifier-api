import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly httpService: HttpService) {}

  async send(messageDto: MessageDto) {
    console.log(messageDto, "from api");
    const body: Object = {"test": "test"};
    await this.httpService
      .post('http://notifier-go-service:8080/message/send', body)
      .subscribe((response) => console.log(response.data, "from go"));
    return 'This action adds a new message';
  }
}
