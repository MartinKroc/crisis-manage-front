import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorize]'
})
export class ColorizeDirective implements OnInit {

  @Input()
  private type: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const elem = this.el.nativeElement;
    if (this.type === 'Alert Wodny' || this.type === 'Ostrzeżenie Wodne') {
      this.renderer.setStyle(elem,"background-color","#9ec3ff");
    }
    else if (this.type === 'Smog') {
      this.renderer.setStyle(elem,"background-color","#fff3b0");
    }
    else if (this.type === 'Mróz') {
      this.renderer.setStyle(elem,"background-color","#8990ad");
    }
    else if (this.type === 'Upał') {
      this.renderer.setStyle(elem,"background-color","#d9d6b6");
    }
  }
}
