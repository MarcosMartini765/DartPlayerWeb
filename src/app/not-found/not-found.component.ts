import { Component, OnInit } from '@angular/core';
import { SITE_URL, EN_US, PT_BR } from "../constants/constants";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  goToUs() {
    window.location.href = `${SITE_URL}/${EN_US}`;
  }

  goToBr() {
    window.location.href = `${SITE_URL}/${PT_BR}`;
  }

  redirectUser() {
    const lang = navigator.language

    if (lang.includes("en-")) {
      this.goToUs();
    } else if (lang.includes("pt-")) {
      this.goToBr();
    } else {
      this.goToUs();
    }

  }

  ngOnInit(): void {
    this.redirectUser();
  }

}
