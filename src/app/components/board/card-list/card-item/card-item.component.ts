import { Component, OnInit } from '@angular/core';
import { ICard } from '../../../../models/cards-listist';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit, ICard {
  id: string;
  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

}
