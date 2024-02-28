import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';

import {SecureStorage} from 'secure-web-storage';
const SECRET_KEY = 'FsdGVkX19';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    key = "FsdGVkX19";

    constructor() { }

    public saveData(key: string, value: string) {
      localStorage.setItem(key, this.encrypt(value));
    }

    public getData(key: string) {
      let data = localStorage.getItem(key) || "";
      return this.decrypt(data);
    }
    public removeData(key: string) {
      localStorage.removeItem(key);
    }

    public clearData() {
      localStorage.clear();
    }

    private encrypt(txt: string): string {
      return CryptoJS.AES.encrypt(txt, this.key).toString();
    }

    private decrypt(txtToDecrypt: string) {
      return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
    }

}
