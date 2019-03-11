import { Component, Input } from '@angular/core';
import { Mood } from './mood.service';
import { attachViewState } from '../../../view-state-utils';
import { ItemViewState } from '../../model/itemviewstate';
import { Observable } from 'tns-core-modules/ui/page/page';

const ItemViewStateFactory = () => { return { selected: false } };

@Component({
  selector: 'ns-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css'],
  moduleId: module.id,
})
export class MoodComponent extends Observable {

  @attachViewState<ItemViewState>("item", ItemViewStateFactory)
  vs: ItemViewState;

  @Input() item: Mood;

}
