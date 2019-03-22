import { Injectable } from '@angular/core';

@Injectable()
export class MockgraphService {

    date1 = new Date('January 23, 2019 15:24:00');
    date2 = new Date('January 25, 2019 15:24:00');
    date3 = new Date('February 23, 2019 15:24:00');
    date4 = new Date('February 28, 2019 15:24:00');
    date5 = new Date('March 15, 2019 15:24:00');
    date6 = new Date('March 16, 2019 15:24:00');
    date7 = new Date('June 23, 2019 15:24:00');
    date8 = new Date('August 23, 2019 15:24:00');

    getDateTimeSource(): MoodEntry[] {
        return [
            { Date: this.date1.getTime(), Mood: 1 },
            { Date: this.date2.getTime(), Mood: 2 },
            { Date: this.date3.getTime(), Mood: 5 },
            { Date: this.date4.getTime(), Mood: 3 },
            { Date: this.date5.getTime(), Mood: 2 },
            { Date: this.date6.getTime(), Mood: 1 },
            { Date: this.date7.getTime(), Mood: 4 },
            { Date: this.date8.getTime(), Mood: 5 },

        ];
    }
}

export class MoodEntry {
    constructor(public Date?: number, public Mood?: number) {
    }
}
