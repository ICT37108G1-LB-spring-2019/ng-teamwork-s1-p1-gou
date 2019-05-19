import { Injectable } from "@angular/core";
import { IPhone } from "../models/phone";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

const API_PATH = "http://localhost:3000/",
  PHONES_PATH = API_PATH + "phones/",
  FEATURES_PATH = API_PATH + "features/";

@Injectable({
  providedIn: "root"
})
export class PhoneService {
  constructor(private http: HttpClient) {}

  /**
   * [GET]
   *
   * Get All phone
   */
  getPhones(): Observable<IPhone[]> {
    return this.http.get(PHONES_PATH).pipe(
      map((phones: Array<any>) => {
        return phones.map(phone => phone);
      }),
      catchError(err => throwError(err))
    );
  }

  /**
   * [GET]
   * Get phone by id
   * @param id
   */
  getPhoneById(id: number): Observable<IPhone> {
    let api = PHONES_PATH + id;

    return this.http.get(api).pipe(
      map((phone: IPhone) => phone),
      catchError(err => throwError(err))
    );
  }

  /**
   * [GET]
   *
   * Get Features
   */
  getFeatures(): Observable<Array<string>> {
    return this.http.get(FEATURES_PATH).pipe(
      map((feature: Array<string>) => feature),
      catchError(err => throwError(err))
    );
  }

  /**
   * [DELETE]
   *
   * Delete phone by id
   * @param id
   */
  deletePhone(id: number): Observable<any> {
    let api = PHONES_PATH + id;
    return this.http.delete(api);
  }

  /**
   * [POST]
   *
   * Add new phone
   * @param newPhone
   */
  addPhone(newPhone: IPhone): Observable<any> {
    return this.http.post(PHONES_PATH, newPhone);
  }

  /**
   * [PUT]
   *
   * Update phone by id
   * @param id
   * @param value
   */
  updatePhone(id: number, value: IPhone): Observable<any> {
    let api = PHONES_PATH + id;

    return this.http.put(api, value);
  }
}
