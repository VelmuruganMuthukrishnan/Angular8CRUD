import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, Event, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((RouterEvent: Event) => {
      if (RouterEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (RouterEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }

    });
  }

}
