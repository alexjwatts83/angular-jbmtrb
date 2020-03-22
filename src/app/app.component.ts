import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    console.log("of where inputs are individual");
    const numbers = [2,4,6,8];
    // of where inputs are individual
    of(2,4,6,8).subscribe(
      sub => {
      console.log(`Of ${sub}`)
      },
      err => {
        console.error(`Error Of`);
        console.error({err: err});
      },
      () => {
        console.info('Le Complete');
      });
    console.log("of where single input array");
    // of where single input array
    of(numbers).subscribe(
      sub => {
      console.log(`Of ${sub}`)
      },
      err => {
        console.error(`Error Of`);
        console.error({err: err});
      },
      () => {
        console.info('Le Complete');
      });

    console.log("of where single input array but using ...");
    // of where single input array
    of(...numbers).subscribe(
      sub => {
      console.log(`Of ${sub}`)
      },
      err => {
        console.error(`Error Of`);
        console.error({err: err});
      },
      () => {
        console.info('Le Complete');
      });
  }
}
