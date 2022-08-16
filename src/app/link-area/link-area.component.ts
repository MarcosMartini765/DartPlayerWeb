import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-link-area',
  templateUrl: './link-area.component.html',
  styleUrls: ['./link-area.component.css']
})
export class LinkAreaComponent implements OnInit {

  constructor(
    private _translation: TranslationService
  ) { }

  linkArea = this._translation.getLinkArea()

  ngOnInit(): void {
  }

}
