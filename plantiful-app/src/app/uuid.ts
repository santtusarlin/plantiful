import { Injectable } from '@angular/core';

// Globaali muuttuja, mihin syötetään tietokantayhteyden aikana syntyvän uid:n arvo
@Injectable()
export class Uuid {
  public uuid: string = '';
}