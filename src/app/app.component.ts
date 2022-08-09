import { Component } from '@angular/core';
import { SITE_NAME } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = SITE_NAME;
}
