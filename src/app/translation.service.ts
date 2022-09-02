import { Injectable } from '@angular/core';
import english from '../assets/i18n/en.json';
import portuguese from '../assets/i18n/pt-BR.json';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private ptBRlanguage = "pt-BR"

  private language = "pt-BR"

  resources = {}

  constructor() { 
    if (!navigator.language.includes("pt")) {
      this.language = "en"
    }
    document.documentElement.lang = this.language;
  }

  getPrivacyPolicy() {
    if (this.language == this.ptBRlanguage) {
      return portuguese['privacy-policy']
    }
    return english['privacy-policy']
  }

  getNoFound() {
    if (this.language == this.ptBRlanguage) {
      return portuguese['not-found']
    }
    return english['not-found']
  }

  getDescriptionArea() {
    if (this.language == this.ptBRlanguage) {
      return portuguese['description-area']
    }
    return english['description-area']
  }

  getLinkArea() {
    if (this.language == this.ptBRlanguage) {
      return portuguese['link-area']
    }
    return english['link-area']
  }

  getScreenshotsArea() {
    if (this.language == this.ptBRlanguage) {
      return portuguese['screenshots-area']
    }
    return english['screenshots-area']
  }

  getAppBarArea() {
    if (this.language == this.ptBRlanguage) {
      return portuguese['app-bar-area']
    }
    return english['app-bar-area']
  }
}
