import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStruckThrough]'
})
export class StruckThroughDirective {
  @Input('appStruckThrough') private isDone: boolean;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.struckThroughCard();
  }

  private struckThroughCard() {
    if (this.isDone) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'text-decoration', 'line-through')
    }
  }
}
