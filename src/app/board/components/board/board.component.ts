import { Component } from '@angular/core';
import { ICardList } from 'src/app/board/models/cards';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public searchText: string;
  public cardLists: ICardList[];

  constructor(public cardsService: CardsService) {
    this.cardLists = cardsService.cardList;
  }

  public onSearch(searchText: string) {
    this.searchText = searchText;
  }

  public removeCard(listWithCard) {
    this.cardsService.removeCard(listWithCard);
  }
}
