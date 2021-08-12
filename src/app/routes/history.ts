import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
    templateUrl: 'history.html'
})
export class HistoryComponent {

    _hours: any = 4;
    url1: SafeResourceUrl = this.createSafeUrl1();
    url2: SafeResourceUrl = this.createSafeUrl2();

    constructor(
        protected sanitizer: DomSanitizer
    ) {}

    get hours() { return this._hours; }

    set hours(hours) {
        this._hours = hours;
        this.url1 = this.createSafeUrl1();
        this.url2 = this.createSafeUrl2();
    }

    createSafeUrl1() {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://thingspeak.com/channels/1465860/charts/1?bgcolor=%23ffffff&color=%232020d6&dynamic=true&results="+(this._hours*60)+"&title=State+of+Charge+%5B%25%5D&type=line&yaxis=SoC&width=auto&height=auto");
    }

    createSafeUrl2() {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://thingspeak.com/channels/1465877/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results="+(this._hours*60)+"&title=P+%5BW%5D&type=line&yaxis=Watt&width=auto&height=auto");
    }
}
