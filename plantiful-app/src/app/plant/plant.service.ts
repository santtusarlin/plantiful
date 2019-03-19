import { Injectable } from '@angular/core';
import { plantData } from '../mockdata/mockdata';

export interface Image {
  mood: number,
  freeText: string,
  activities: Array<any>,
  imageURL: string
}

@Injectable()
export class PlantService {

  _plantData: Array<Image> = [];

  getImages(): Array<Image> {
    this._plantData = plantData;
    console.log()
    return this._plantData;
  }
}
