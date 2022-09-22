import { Component, OnInit } from '@angular/core';
import { Message } from '../interface/message';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private websocketService: WebsocketService) {}

  messageInput: string;

  ngOnInit() {
  }

  sendMessage(){
    this.websocketService.sendMessage(this.messageInput)
    this.messageInput = "";
  }

}
