import { Component } from '@angular/core';
import { ICardList } from 'src/app/board/models/cards';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public searchText: string;
  public cardLists: ICardList[];

  constructor(
    private cardsService: CardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.cardLists = cardsService.cardList;
  }

  public onSearch(searchText: string) {
    this.searchText = searchText;
  }

  public removeCard(listWithCard) {
    this.cardsService.removeCard(listWithCard);
  }

  public editCard(id: string) {
    this.router.navigate(['edit-task', id], { relativeTo: this.activatedRoute });
  }
}
