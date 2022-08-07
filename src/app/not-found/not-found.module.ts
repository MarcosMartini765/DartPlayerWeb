import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutes } from "./not-found.routing";
import { NotFoundService } from "./not-found.service";
import { NotFoundComponent } from "./not-found.component";
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, NotFoundRoutes],
  providers: [
    NotFoundService,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: [],
})
export class NotFoundModule {}