import { Component, OnInit } from '@angular/core';
import { MockgraphService } from './mockgraph.service';
import { MoodEntry } from './mockgraph.service';
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
  selector: 'ns-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  moduleId: module.id,
  providers: [MockgraphService],
})
export class GraphComponent implements OnInit {

  min;
  max;

  private _dateTimeSource: ObservableArray<MoodEntry>;

    constructor(private _dataService: MockgraphService) { }



    get dateTimeSource(): ObservableArray<MoodEntry> {
        return this._dateTimeSource;
    }

    ngOnInit() {
        this._dateTimeSource = new ObservableArray(this._dataService.getDateTimeSource());
        var date = new Date()

        // this.min = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString();
        // this.max = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString();

        this.min = "3/1/2019";
        this.max = "3/4/2019"
    }

}
