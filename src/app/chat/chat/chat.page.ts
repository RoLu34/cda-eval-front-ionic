import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../interface/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private chatService: ChatService) {
    chatService.chatMessages.subscribe((msg) => {
      console.log('Response recieved from websocket: ' + msg);
    });
  }

  messageList: Message[] = [
    {
      message: "Bonjour !",
      username: "lucas",
      date: "20/20/22",
      room: "54fd21f8"
    },
    {
      message: "comment ça va ?",
      username: "lucas",
      date: "20/20/22",
      room: "54fd21f8"
    },
  ]

  ngOnInit() {
  }

  private message = {
    message: "hello",
    username: "jacky",
    date: "06/08/1997",
    room: "1234"
  }

  sendMessage(){
    console.log('new message from the client: ', this.message);
    this.chatService.chatMessages.next(this.message);
  }

}
