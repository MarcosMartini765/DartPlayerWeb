import { Component, OnInit } from '@angular/core';
import { DASHBOARD_PHOTO_URL, DARK_PHOTO_URL, LIGHT_PHOTO_URL } from "../constants/constants";
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-screenshots-area',
  templateUrl: './screenshots-area.component.html',
  styleUrls: ['./screenshots-area.component.css']
})
export class ScreenshotsAreaComponent implements OnInit {

  constructor(
    private _translation: TranslationService
  ) { }

  ngOnInit(): void {
  }

  screenshotsArea = this._translation.getScreenshotsArea()

  dashboardPhotoUrl: string = DASHBOARD_PHOTO_URL
  darkPhotoUrl: string = DARK_PHOTO_URL
  lightPhotoUrl: string = LIGHT_PHOTO_URL

}
