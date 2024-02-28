import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const TOKEN_KEY = 'auth-token';
//const USER_KEY = 'auth-user';

@Injectable()
export class SessionStorageService {

    constructor(private storageService: StorageService) { }

    setJsonValue(key: string, value: any) {
        this.storageService.saveData(key, value);
    }

    getJsonValue(key: string) {
        return this.storageService.getData(key);
    }
    clearToken() {
        return this.storageService.clearData();
    }

    saveToken(token: string) {
        this.storageService.removeData(TOKEN_KEY);
        this.storageService.saveData(TOKEN_KEY, token);
    }

    getToken(): string {
        return this.storageService.getData(TOKEN_KEY);
    }

    //saveUser(user) {
    //    this.storageService.secureStorage.removeItem(USER_KEY);
    //    this.storageService.secureStorage.setItem(USER_KEY, user);
    //}

    //getUser() {
    //    return this.storageService.secureStorage.getItem(USER_KEY);
    //}
}
