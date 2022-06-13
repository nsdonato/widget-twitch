import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as tmi from 'tmi.js';
import { ChatService } from '../chat/chat.service';
import { SocialLink } from '../common/interfaces';
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class TwitchBotService {
  private tmiClient: tmi.Client;
  private clientId = this.config.get<string>('TWITCH_API_CLIENT_ID');
  private tmiPassword = this.config.get<string>('TWITCH_TMI_PASSWORD');
  private channels = this.config.get<string>('TWITCH_CHANNEL');

  constructor(
    private readonly config: ConfigService,
    private readonly chatService: ChatService,
    private readonly events: EventsGateway,
  ) {


    this.setupClient({
      options: { debug: true },
      connection: {
        reconnect: true,
        secure: true,
      },
      identity: {
        username: this.clientId,
        password: this.tmiPassword,
      },
      channels: this.channels.split(','),
    });
  }

  private setupClient(options: tmi.Options) {
    this.tmiClient = new tmi.Client(options);

    this.tmiClient.connect();

    this.tmiClient.on('redeem', (...args) => {
      Logger.log({
        channel: args[0],
        user: args[1],
        rewardId: args[2],
      });
    });

    this.tmiClient.on('action', (...args) => this.handleActions(...args));

    this.tmiClient.on(
      'message',
      async (...args) => await this.handleChats(...args),
    );
  }

  private handleActions(
    channel: string,
    state: tmi.ChatUserstate,
    message: string,
    self: boolean,
  ) {
    if (self) return;

    message = message.toLowerCase();

    console.log('Action', {
      state,
    });
  }

  private async handleChats(
    channel: string,
    state: tmi.ChatUserstate,
    message: string,
    self: boolean,
  ) {
    if (self) return;

    const username = state['display-name'];

    console.log('Action', {
      state,
    });

    const chat = await this.chatService.createChat({
      channel,
      message,
      tags: state,
    });

    message = message.toLowerCase();

    if (message.includes('!confetti')) {
      this.events.sendConfetti();
    }

    if (message.includes('!zumbido')) {
      this.events.sendZumbido();
    }

  }
}
