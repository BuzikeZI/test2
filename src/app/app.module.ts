import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { MessageService } from './message.service';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { MathComponent } from './math/math.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MessagesComponent,
    DetailComponent,
    AddComponent,
    SearchComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [StudentService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
