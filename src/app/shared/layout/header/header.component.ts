import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavigationVisible: boolean = false;

  toggleNavigation (): void {
    this.isNavigationVisible = !this.isNavigationVisible;
  }
}
