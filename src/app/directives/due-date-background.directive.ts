import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appDueDateBackground]'
})
export class DueDateBackgroundDirective {
  @Input('appDueDateBackground') private cardInfo;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.changeColor();
  }

  private changeColor() {
    const dateNow = new Date();
    const differenceDate = Math.floor(moment.duration(moment(dateNow).diff(moment(this.cardInfo.date))).asDays());

    if (differenceDate >= 3 && differenceDate < 7 && !this.cardInfo.isDone) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#ff0000')
    } else if (differenceDate >= 7 && !this.cardInfo.isDone) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#ffff00')
    }
  }
}
