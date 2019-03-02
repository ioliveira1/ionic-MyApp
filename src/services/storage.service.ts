import { STORAGE_KEYS } from './../config/storage_keys.config';
import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { Cart } from '../models/cart';

@Injectable()
export class StorageService{

    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr != null){
            return JSON.parse(usr);
        } else {
            return null;
        }
    }

    setLocalUser(obj : LocalUser) {
        if (obj != null){
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        } else {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
    }

    getCart() : Cart{
        let cart = localStorage.getItem(STORAGE_KEYS.cart);
        if (cart != null){
            return JSON.parse(cart);
        } else {
            return null;
        }
    }

    setCart(obj: Cart){
        if (obj != null){
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        } else {
            localStorage.removeItem(STORAGE_KEYS.cart);
        }
    }
}