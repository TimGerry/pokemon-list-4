import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  @Input('appHover') color?: string

  #nativeEl: HTMLElement
  #originalColor: string;

  constructor(private el: ElementRef) {
    this.#nativeEl = el.nativeElement;
    this.#originalColor = this.#nativeEl.style.backgroundColor;
   }

  @HostListener('mouseenter')
  onMouseEnter() {
    // this.#nativeEl.classList.add('water')
    this.#nativeEl.style.backgroundColor = this.color ?? 'grey';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.#nativeEl.classList.remove('water')
    this.#nativeEl.style.backgroundColor = this.#originalColor;
  }

}
