import { AfterViewInit, Component } from "@angular/core";
import { BatteryAPI } from "../services/batteryapi.service";

@Component({
    templateUrl: 'livebattery.html',
    styleUrls: ['livebattery.scss']
})
export class LiveBatteryComponent implements AfterViewInit {

    stats: any;

    constructor(private api: BatteryAPI) {}

    ngAfterViewInit() {
        this.refresh();
    }

    async refresh() {
        this.stats = await this.api.getBatteryStats();

        setTimeout(() => this.refresh(), 3000);
    }
}
