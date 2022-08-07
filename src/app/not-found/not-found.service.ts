import { Inject, Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

@Injectable({
  providedIn: 'root'
})
export class NotFoundService {

  constructor(
    @Optional()
    @Inject(RESPONSE)
    private _response: any,
    private _router: Router
  ) { }

  /**
   * setStatus
   */
  public setStatus(code: number, message: string) {
    if (!this._response) return

    this._response.statusCode = code;
    this._response.message = message
  }

  /**
   * goBackToMain
   */
  public goBackToMain() {
    this._router.navigateByUrl("/")
  }
}
