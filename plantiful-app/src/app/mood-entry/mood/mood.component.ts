import { Component, Input } from '@angular/core';
import { Mood } from './mood.service';
import { attachViewState } from '../../../view-state-utils';
import { ItemViewState } from '../../model/itemviewstate';

const ItemViewStateFactory = () => { return { selected: false } };

@Component({
  selector: 'ns-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css'],
  moduleId: module.id,
})
export class MoodComponent {

  @attachViewState<ItemViewState>("item", ItemViewStateFactory)
  vs: ItemViewState;

  @Input() item: Mood;

}
