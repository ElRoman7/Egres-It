import { Pipe, PipeTransform } from '@angular/core';
import { Oferta } from '../interfaces/oferta.interface';

@Pipe({
  name: 'ofertImage'
})

export class OfertImagePipe implements PipeTransform {
  transform(ofert:Oferta): string {
    if(!ofert.empresa) return 'assets/no-image.png';

    return `assets/ofertas/${ofert.empresa}.png`

  }
}
