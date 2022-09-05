import { Component, OnInit } from '@angular/core';
import { APP_ICON_URL, PRIVACY_POLICY_ID } from "../constants/constants";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  ngOnInit(): void {
  }

  appIconUrl: string = APP_ICON_URL
  privacyPolicyId: string = `#${PRIVACY_POLICY_ID}`

}
