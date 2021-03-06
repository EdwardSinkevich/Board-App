import { Component, Input, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { ICard } from '../../../models/cards';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements AfterViewInit {
  @Input() public card: ICard;
  @Input() public isDone: boolean;
  @Output() public removeCardEvent = new EventEmitter<string>();
  @Output() public editCardEvent = new EventEmitter<string>();
  @ViewChild('cardContent', { static: false }) private cardContent: ElementRef;
  @ViewChild('cardIndicator', { static: false }) private cardIndicator: ElementRef;

  public contentHeight: string;

  ngAfterViewInit(): void {
    this.contentHeight = this.cardContent.nativeElement.scrollHeight + 'px';
    this.cardContent.nativeElement.style.maxHeight = 0;
  }

  public changePanelState() {
    if (this.cardContent.nativeElement.style.maxHeight !== '0px') {
      this.cardContent.nativeElement.style.maxHeight = 0;
      this.cardIndicator.nativeElement.style.transform = 'rotate(0deg)';
    } else {
      this.cardContent.nativeElement.style.maxHeight = this.contentHeight;
      this.cardIndicator.nativeElement.style.transform = 'rotate(180deg)';
    }
  }

  public removeCard() {
    this.removeCardEvent.emit(this.card.id);
  }

  public editCard() {
    this.editCardEvent.emit(this.card.id);
  }
}
