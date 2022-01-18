import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SocialNavComponent } from './social-nav/social-nav.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [				
    AppComponent,
      HeaderComponent,
      ContentComponent,
      SocialNavComponent,
      EmailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
