import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'clientList',
        loadChildren: () => import('../chat/client-list/client-list.module').then(m => m.ClientListPageModule)
      },
      {
        path: 'room',
        loadChildren: () => import('../chat/room/room.module').then(m => m.RoomPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/chat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
