import { DOCUMENT, Location, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { PRIVACY_POLICY_ID, URL_SCROLL_TO_PRIVACY_POLICY } from "../constants/constants";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    @Inject(Location) private location: Location
  ) { }

  scrollTo() {
    setTimeout(() => {
      if(!this.location.path(true).includes(URL_SCROLL_TO_PRIVACY_POLICY)) return
      if (!isPlatformBrowser) return
      const element = this.doc.getElementById(PRIVACY_POLICY_ID);
      if (!element) return
      element.scrollIntoView()
    }, 1000);
  }

  @Input() privacyPolicyId = PRIVACY_POLICY_ID;

  ngOnInit(): void {
    this.scrollTo()
  }

}
