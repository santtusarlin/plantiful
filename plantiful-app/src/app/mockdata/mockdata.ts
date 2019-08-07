export const plantData = [
    {
        "mood": 1,
        "freeText": "asd",
        "activities": [
            {
                "title": "Gym",
                "imageURL": "gym.png",
                "selected": true
            },
            {
                "title": "Computer",
                "imageURL": "computer.png",
                "selected": true
            },
            {
                "title": "Dying",
                "imageURL": "kys.png",
                "selected": true
            },
            {
                "title": "Cooking",
                "imageURL": "cooking.png",
                "selected": true
            }
        ],
        "imageURL": "plant1.png"
    }, {
        "mood": 2,
        "freeText": "xd",
        "activities": [
            {
                "title": "Gym",
                "imageURL": "gym.png",
                "selected": true
            },
            {
                "title": "Computer",
                "imageURL": "computer.png",
                "selected": true
            },
            {
                "title": "Dying",
                "imageURL": "kys.png",
                "selected": true
            },
            {
                "title": "Cooking",
                "imageURL": "cooking.png",
                "selected": true
            }
        ],
        "imageURL": "plant2.png"
    }, {
        "mood": 3,
        "freeText": "Lol",
        "activities": [
            {
                "title": "Gym",
                "imageURL": "gym.png",
                "selected": true
            },
            {
                "title": "Computer",
                "imageURL": "computer.png",
                "selected": true
            },
            {
                "title": "Dying",
                "imageURL": "kys.png",
                "selected": true
            },
            {
                "title": "Cooking",
                "imageURL": "cooking.png",
                "selected": true
            }
        ],
        "imageURL": "plant1.png"
    }, {
        "mood": 4,
        "freeText": "Jee",
        "activities": [
            {
                "title": "Gym",
                "imageURL": "gym.png",
                "selected": true
            },
            {
                "title": "Computer",
                "imageURL": "computer.png",
                "selected": true
            },
            {
                "title": "Dying",
                "imageURL": "kys.png",
                "selected": true
            },
            {
                "title": "Cooking",
                "imageURL": "cooking.png",
                "selected": true
            }
        ],
        "imageURL": "plant2.png"
    }
]

export class mockEntries {
    
getMockEntries() {

    const date1 = new Date('January 23, 2019 15:24:00');
    const date2 = new Date('January 25, 2019 15:24:00');
    const date3 = new Date('February 23, 2019 15:24:00');
    let mockdata = [
            { 
            date: date1.toLocaleDateString(), mood: 1, 
            activities: [
              { imageURL: "beer.png",
                title: "beer",
                selected: "true"
              },
              { imageURL: "beer.png",
                title: "beer",
                selected: "true"
              },
              { imageURL: "beer.png",
                title: "beer",
                selected: "true"
              }
            ],
            freeText: "lol xd1",
            moodImageURL: "mood_icon-01.png",
            imageURL: "Flower1.png"
            },
            { 
            date: date2.toLocaleDateString(), mood: 2, activities: [
              { imageURL: "beer.png",
                title: "beer",
                selected: "true"
              }
            ],
            freeText: "lol xd2",
            moodImageURL: "mood_icon-02.png",
            imageURL: "Flower2.png"
            },
            { 
            date: date3.toLocaleDateString(), mood: 3, activities: [
              { imageURL: "hiking.png",
                title: "hiking",
                selected: "true"
              }
            ],
            freeText: "lol xd3",
            moodImageURL: "mood_icon-03.png",
            imageURL: "Flower3.png"
            }
          ];
          console.log(mockdata);
          return mockdata;
  }
}