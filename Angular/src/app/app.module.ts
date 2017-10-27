import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { GetphotoService } from './services/getphoto.service';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { GgezComponent } from './components/ggez/ggez.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    GgezComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
