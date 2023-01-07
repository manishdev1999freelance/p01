import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    RoomDetailsComponent,
    RoomsComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
