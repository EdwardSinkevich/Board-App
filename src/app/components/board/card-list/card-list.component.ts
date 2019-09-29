import { Component, OnInit, Input } from '@angular/core';
import { ICardList } from '../../../models/cards'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() cardList: ICardList;

  constructor() { }

  ngOnInit() {
  }

}
