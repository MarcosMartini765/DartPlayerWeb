import { Component, OnInit } from '@angular/core';
import { NotFoundService } from './not-found.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private _notFoundService: NotFoundService,
    ) { }

  goBackToMain() {
    this._notFoundService.goBackToMain()
  }

  ngOnInit(): void {
    this._notFoundService.setStatus(404, 'Not found')
  }

}
