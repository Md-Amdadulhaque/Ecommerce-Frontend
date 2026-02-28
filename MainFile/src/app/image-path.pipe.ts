import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environments/environment.development';
@Pipe({
  name: 'imagePath',
  standalone: true
})
export class ImagePathPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${environment.imagePath}${value}`;
  }
}
