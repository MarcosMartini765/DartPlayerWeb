import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutes } from "./not-found.routing";
import { NotFoundService } from "./not-found.service";
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [CommonModule, NotFoundRoutes, RouterTestingModule],
  providers: [
    NotFoundService,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: [],
})
export class NotFoundModule {}