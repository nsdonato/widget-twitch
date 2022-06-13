import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from '../chat/chat.service';
import { Chat } from '../common/interfaces/chat.interface';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly chatService: ChatService) { }

  @SubscribeMessage('selected-chat')
  handleSelectedChat(@MessageBody() chat: Chat) {
    this.chatService.setSelectedChat(chat);
    this.server.emit('selected-chat', chat);
  }

  @SubscribeMessage('confetti')
  sendConfetti() {
    this.server.emit('confetti');
  }

  @SubscribeMessage('zumbido')
  sendZumbido() {
    this.server.emit('zumbido');
  }

  @SubscribeMessage('new-question')
  newQuestion(@MessageBody() chat: Chat) {
    this.server.emit('new-question', chat);
  }

  @SubscribeMessage('selected-background')
  setBackground(@MessageBody() background: string) {
    this.server.emit('selected-background', background);
  }

  hydrate(@MessageBody() user: string) {
    this.server.emit('hydrate', user);
  }
}
