import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PlantComponent } from "./plant/plant.component";
import { StatsComponent } from "./stats/stats.component";
import { SettingsComponent } from "./settings/settings.component";
import { CalendarComponent } from "./stats/calendar/calendar.component";
import { GraphComponent } from "./stats/graph/graph.component";

const routes: Routes = [
    { path: "", redirectTo: "/plant", pathMatch: "full" },
    { path: "plant", component: PlantComponent },
    { path: "stats", component: StatsComponent },
    { path: "settings", component: SettingsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
