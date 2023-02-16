import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { SimpleValueState } from './state/simple-value.state';
import { ChangeValueComponent } from './change-value/change-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([SimpleValueState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
