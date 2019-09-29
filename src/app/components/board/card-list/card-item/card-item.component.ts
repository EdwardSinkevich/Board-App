import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../../../../models/cards';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card: ICard;

  constructor() { }

  ngOnInit() {
  }

}
