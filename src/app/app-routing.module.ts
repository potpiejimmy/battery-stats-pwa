import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './routes/history';
import { LiveBatteryComponent } from './routes/livebattery';

const routes: Routes = [
    { path: '', component: LiveBatteryComponent },
    { path: 'history', component: HistoryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
