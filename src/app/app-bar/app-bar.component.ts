import { Component, OnInit } from '@angular/core';
import { scrollToPrivacyPolicyClick } from "../functions/scrollToPrivacyPolicy";
import { APP_ICON_URL } from "../constants/constants";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor() { }

  scrollToPrivacyPolicyOnClick() {
    scrollToPrivacyPolicyClick();
  }

  ngOnInit(): void {
  }

  appIconUrl: string = APP_ICON_URL

}
