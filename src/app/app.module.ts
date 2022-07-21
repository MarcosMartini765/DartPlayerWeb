import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TitleAreaComponent } from './title-area/title-area.component';
import { DescriptionAreaComponent } from './description-area/description-area.component';
import { LinkAreaComponent } from './link-area/link-area.component';
import { ScreenshotsAreaComponent } from './screenshots-area/screenshots-area.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleAreaComponent,
    DescriptionAreaComponent,
    LinkAreaComponent,
    ScreenshotsAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
