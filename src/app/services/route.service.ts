import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  currentPath: Subject<string> = new Subject();

  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.currentPath.next(location.path());
      } else {
        this.currentPath.next('/');
      }
    });
  }

  navigate(url: string, extra?: NavigationExtras) {
    this.router.navigate([url], extra);
  }
}
