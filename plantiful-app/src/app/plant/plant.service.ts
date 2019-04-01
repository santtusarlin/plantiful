import { Injectable } from '@angular/core';
import { plantData } from '../mockdata/mockdata';

export interface Image {
  mood: number,
  freeText: string,
  activities: Array<any>,
  imageURL: string,
  date: Date
}

@Injectable()
export class PlantService {
}
