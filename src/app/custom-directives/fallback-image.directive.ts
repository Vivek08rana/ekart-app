import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[fallbackImage]'
})

export class FallbackImageDirective {
  @Input() fallbackImage: string = 'https://t3.ftcdn.net/jpg/01/30/14/60/240_F_130146011_64algBC3Kz91zzdht7qeW2fEnUipEtwB.jpg';

  @HostListener('error', ['$event.target'])
  onError(img: HTMLImageElement) {
    if (!img.hasAttribute('data-fallback')) {
      // First time failure, set fallback image
      img.src = this.fallbackImage;
      img.setAttribute('data-fallback', 'true');
      console.log('Fallback image applied');
    } else {
      // Fallback image also failed
      console.log('Fallback image failed too, showing alt text');
      img.alt = 'Failed to load image';
      // Optionally, hide broken image if you want:
      // img.style.display = 'none';
    }
  }
}

