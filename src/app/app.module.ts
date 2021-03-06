import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';


import { AppComponent }   from './app.component';
import { CoreModule }     from './core/core.module';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
