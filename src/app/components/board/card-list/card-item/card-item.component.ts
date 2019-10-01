import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { ICard } from '../../../../models/cards';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() public card: ICard;
  @Output() public removeCardEvent = new EventEmitter<string>();
  @ViewChild('cardContent', { static: false }) private cardContent : ElementRef;
  @ViewChild('cardIndicator', { static: false }) private cardIndicator : ElementRef;
  @ViewChild('cardHeader', { static: false }) private cardHeader : ElementRef;

  public contentHeight: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.contentHeight = this.cardContent.nativeElement.scrollHeight + 'px';
    this.cardContent.nativeElement.style.maxHeight = 0;
  }

  public changePanelState() {
    if (this.cardContent.nativeElement.style.maxHeight !== "0px"){
      this.cardContent.nativeElement.style.maxHeight = 0;
      this.cardHeader.nativeElement.style.background = null;
      this.cardIndicator.nativeElement.style.transform = 'rotate(0deg)';
    } else {
      this.cardContent.nativeElement.style.maxHeight = this.contentHeight;
      this.cardIndicator.nativeElement.style.transform = 'rotate(180deg)';
      this.cardHeader.nativeElement.style.background = '#eeeeee';
    }
  }

  public removeCard() {
    this.removeCardEvent.emit(this.card.id);
  }
}
