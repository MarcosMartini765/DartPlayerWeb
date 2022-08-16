import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-description-area',
  templateUrl: './description-area.component.html',
  styleUrls: ['./description-area.component.css']
})
export class DescriptionAreaComponent implements OnInit {

  constructor(
    private _translation: TranslationService
  ) { }

  getStrings = this._translation.getDescriptionArea()

  ngOnInit(): void {
  }

}
