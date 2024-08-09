import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {

  #hasView = false;

  @Input() set appUnless(conditions: boolean[]) {
    if (!this.#hasView && conditions.includes(true)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.#hasView = true;
    } else if(this.#hasView) {
      this.viewContainer.clear();
      this.#hasView = false;
    }
  }

  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) { }

}
