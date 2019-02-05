import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PlantComponent } from "./plant/plant.component";
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { GraphComponent } from './stats/graph/graph.component';
import { CalendarComponent } from './stats/calendar/calendar.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        PlantComponent,
        StatsComponent,
        SettingsComponent,
        GraphComponent,
        CalendarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
