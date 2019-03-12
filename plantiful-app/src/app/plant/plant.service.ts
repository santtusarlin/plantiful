import { Injectable } from '@angular/core';

export interface Image {
  id: number,
  imageURL: string
}

@Injectable()
export class PlantService {

  getImages(): Image[] {
    let images = [
      {
        "id": 1,
        "imageURL": "plant1.png"
      },
      {
        "id": 2,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 3,
        "imageURL": "plant1.png"
      },
      {
        "id": 4,
        "imageURL": "plant2.png"
      },
      {
        "id": 999,
        "imageURL": "ruukku.png"
      },
    ];

    return images;
  }
}
