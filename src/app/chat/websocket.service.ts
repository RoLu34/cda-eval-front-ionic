import { Injectable } from '@angular/core';
import { Message } from './interface/message';
import { MessageTypeEnum } from './message-type-enum';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private websocket: WebSocket;

  public chat: Message[] = [];

  public client = {
    clientId: "",
    username: "",
    roomId: "",
    clientList: []
  }

  constructor() {
    this.websocket = new WebSocket("ws://localhost:3000/");
    this.websocket.onmessage = (event) => this.onMessage(event);
  }

  private onMessage(event){
    const message = JSON.parse(event.data)

    switch (message.type) {
      case MessageTypeEnum.CHAT:
        this.addMessage(message)
        break;

      case MessageTypeEnum.ROOM_INFO:
        this.client.clientId = message.client_id
        this.client.username = message.username
        this.client.roomId = message.room
        this.client.clientList = message.clients_list
        break;

      case MessageTypeEnum.CLIENTS_LIST:
        this.client.clientList = message.clients_list
        break;
    }
  }

  public createRoom(roomId: string){
    this.websocket.send(JSON.stringify({
      type: MessageTypeEnum.CREATE_ROOM,
      room: roomId,
      username: "test"
    }))
  }

  public joinRoom(roomId: string){
    this.websocket.send(JSON.stringify({
      type: MessageTypeEnum.JOIN_ROOM,
      room: roomId,
      username: "test"
    }))
  }

  public leaveRoom(){
    this.websocket.send(JSON.stringify({
      type: MessageTypeEnum.LEAVE_ROOM,
      room: this.client.roomId,
      client_id: this.client.clientId
    }))

    this.clearClient();
    this.clearChat();

  }

  public sendMessage(message: string){
    this.websocket.send(JSON.stringify({
      type: MessageTypeEnum.CHAT,
      content: message,
      date: new Date(),
      room: this.client.roomId,
      username: this.client.username
    }))
  }

  private addMessage(payload){
    const message: Message = {
      content: payload.content,
      username: payload.username,
      date: payload.date,
      room: payload.room
    }
    this.chat.push(message)
    console.log(this.chat)
  }

  private clearClient(){
    this.client = {
      clientId: "",
      username: "",
      roomId: "",
      clientList: []
    }
  }

  private clearChat(){
    this.chat = []
  }

}
