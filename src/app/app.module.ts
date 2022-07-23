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
import { ScreenshotsAreaComponent } from './screenshots-area/screenshots-area.component';
import { ImageTileComponent } from './image-tile/image-tile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleAreaComponent,
    DescriptionAreaComponent,
    LinkAreaComponent,
    ScreenshotsAreaComponent,
    ImageTileComponent,
    PrivacyPolicyComponent
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
