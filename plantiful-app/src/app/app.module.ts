import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSCheckBoxModule } from "nativescript-checkbox/angular";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { GridViewModule } from "nativescript-grid-view/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PlantComponent } from "./plant/plant.component";
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';
import { GraphComponent } from './stats/graph/graph.component';
import { CalendarComponent } from './stats/calendar/calendar.component';
import { MoodEntryComponent } from './mood-entry/mood-entry.component';

import { ActivityService } from './mood-entry/activity/activity.service';
import { ActivityComponent } from './mood-entry/activity/activity.component';
import { ModalComponent } from './settings/modal/modal.component';
import { ModalDialogService } from "nativescript-angular/modal-dialog";

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
        GridViewModule
    ],
    entryComponents: [ModalComponent],
    declarations: [
        AppComponent,
        NavbarComponent,
        PlantComponent,
        StatsComponent,
        SettingsComponent,
        GraphComponent,
        CalendarComponent,
        MoodEntryComponent,
        ActivityComponent,
        ModalComponent
    ],
    providers: [
        ActivityService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
