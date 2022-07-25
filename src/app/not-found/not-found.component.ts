import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  goToUs() {
    window.location.href = "https://dartplayer-94fe5.web.app/en-US/";
  }

  goToBr() {
    window.location.href = "https://dartplayer-94fe5.web.app/pt-BR/";
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
