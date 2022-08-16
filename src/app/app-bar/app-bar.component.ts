import { Component, Inject, OnInit } from '@angular/core';
import { APP_ICON_URL, PRIVACY_POLICY_ID } from "../constants/constants";
import { DOCUMENT } from "@angular/common";
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _translation: TranslationService
  ) { }

  scrollToPrivacyPolicyOnClick() {
    const element = this.document.getElementById(PRIVACY_POLICY_ID)
    element?.scrollIntoView()
  }

  appBarArea = this._translation.getAppBarArea()

  ngOnInit(): void {
  }

  appIconUrl: string = APP_ICON_URL

}
