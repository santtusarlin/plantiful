import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { GridViewModule } from "nativescript-grid-view/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PlantComponent } from "./plant/plant.component";
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { GraphComponent } from './stats/graph/graph.component';
import { MoodEntryComponent } from './mood-entry/mood-entry.component';
import { EntriesComponent } from './stats/entries/entries.component'

import { MoodService } from "./mood-entry/mood/mood.service";
import { ActivityService } from './mood-entry/activity/activity.service';

import { ContextModalComponent } from './settings/context-modal/context-modal.component';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { ClockModalComponent } from './settings/clock-modal/clock-modal.component';
import { ThemeModalComponent } from './settings/theme-modal/theme-modal.component';
import { ToS } from "./settings/ToS";
import { About } from "./settings/About";
import { Uuid } from "./uuid";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        AppRoutingModule,
        TNSCheckBoxModule,
        FormsModule,
        ReactiveFormsModule,
        GridViewModule,
        NativeScriptUIChartModule
    ],
    entryComponents: [ContextModalComponent, ClockModalComponent, ThemeModalComponent],
    declarations: [
        AppComponent,
        NavbarComponent,
        PlantComponent,
        StatsComponent,
        SettingsComponent,
        GraphComponent,
        MoodEntryComponent,
        ContextModalComponent,
        ClockModalComponent,
        ThemeModalComponent,
        EntriesComponent
    ],
    providers: [
        ActivityService,
        MoodService,
        ModalDialogService,
        ToS,
        About,
        Uuid
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
