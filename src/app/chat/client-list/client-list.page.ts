import { Component, OnInit } from '@angular/core';
import { Client } from '../interface/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clientList: Client[] = [
    {
      id: "212sdsdsd",
      username: "Lucas"
    },
    {
      id: "eokscd7545",
      username: "coucou"
    },
    {
      id: "1df21fd5",
      username: "Rodriguez"
    }
  ];

}
