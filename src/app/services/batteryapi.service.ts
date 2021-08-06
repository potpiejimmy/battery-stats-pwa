import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BatteryAPI {

    constructor(private http: HttpClient) {}

    getBatteryStats(): Promise<any> {
        return this.http.get("https://batteryapi.liese.space/stats").toPromise();
    }

}
