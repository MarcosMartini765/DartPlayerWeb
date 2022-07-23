import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { URL_SCROLL_TO_PRIVACY_POLICY, PRIVACY_POLICY_ID } from "../constants/constants";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit, AfterViewChecked {

  constructor() { }

  scrollToPrivacyPolicy() {
    const hash = location.hash;

    switch (hash) {
      case URL_SCROLL_TO_PRIVACY_POLICY:
        const element = document.getElementById(PRIVACY_POLICY_ID);
        element?.scrollIntoView()
        break;
      default:
        break;
    }
  }

  @Input() privacyPolicyId = PRIVACY_POLICY_ID;

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    this.scrollToPrivacyPolicy();
  }

}
