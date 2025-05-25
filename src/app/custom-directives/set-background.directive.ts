import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})

export class SetBackgroundDirective {
    @Input('setBackground') changeTextAndBackColor: {
        backColor: string,
        textColor: string
    };

    constructor(private element: ElementRef, private renderer: Renderer2){
        
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = '#29465b'
        // this.element.nativeElement.style.color = 'white'
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement, 'textColor', this.changeTextAndBackColor.textColor)
    }
}