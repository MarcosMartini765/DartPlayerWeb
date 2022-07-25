import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PRIVACY_POLICY_ID } from "../constants/constants";
import { scrollToPrivacyPolicy } from "../functions/scrollToPrivacyPolicy";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit, AfterViewChecked {

  constructor() { }

  scrollTo() {
    scrollToPrivacyPolicy();
  }

  @Input() privacyPolicyId = PRIVACY_POLICY_ID;

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    this.scrollTo();
  }

}
