import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICardList } from '../../../models/cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cardList: ICardList;
  @Input() searchText: string;
  @Output() removeCardEvent = new EventEmitter();

  removeCard(id: string) {
    this.removeCardEvent.emit({
      cardList: this.cardList,
      id,
    });
  }
}
