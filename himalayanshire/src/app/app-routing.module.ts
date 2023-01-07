import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RoomsComponent } from './core/rooms/rooms.component';
import { RoomDetailsComponent } from './core/room-details/room-details.component';
import { ContactComponent } from './core/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
   {
    path: 'about',
    component: AboutComponent
  },
    {
    path: 'rooms',
    component: RoomsComponent
  },

     {
    path: 'room-details',
    component: RoomDetailsComponent
  },
  {
    path: 'contact',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
