import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
  pure:true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown, appendText: string): unknown {
    return value + appendText;
  }

}
