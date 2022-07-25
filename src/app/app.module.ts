import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";

import { TitleAreaComponent } from './title-area/title-area.component';
import { DescriptionAreaComponent } from './description-area/description-area.component';
import { LinkAreaComponent } from './link-area/link-area.component';
import { ScreenshotsAreaComponent } from './screenshots-area/screenshots-area.component';
import { ImageTileComponent } from './image-tile/image-tile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleAreaComponent,
    DescriptionAreaComponent,
    LinkAreaComponent,
    ScreenshotsAreaComponent,
    ImageTileComponent,
    PrivacyPolicyComponent,
    AppBarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
