import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    RoomDetailsComponent,
    RoomsComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoomDetailsComponent,
    RoomsComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
