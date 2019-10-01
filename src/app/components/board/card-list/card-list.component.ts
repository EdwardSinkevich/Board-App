import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICardList } from '../../../models/cards'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() cardList: ICardList;
  @Input() searchText: string;
  @Output() removeCardEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeCard(id: string) {
    this.removeCardEvent.emit({
      cardList: this.cardList,
      id: id,
    });
  }
}
