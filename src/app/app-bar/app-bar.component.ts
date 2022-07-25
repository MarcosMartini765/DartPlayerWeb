import { Component, OnInit } from '@angular/core';
import { scrollToPrivacyPolicyClick } from "../functions/scrollToPrivacyPolicy";

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

}
