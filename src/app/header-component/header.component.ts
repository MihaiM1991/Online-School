import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared-folder/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { HomeComponent } from '../home-component/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticate: boolean = false;
  userNew: string = '';
  localUser: string = '';
  userName: string = '';
  breadcrumbs: MenuItem[];
  home: MenuItem;

  constructor(
    private authCheck: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.breadCrumbFunction();
    this.authCheck.userNew.subscribe((user) => {
      this.isAuthenticate = !!user;
      this.localUser = user.email;
      this.userName = this.localUser.slice(0, this.localUser.indexOf('@'));
      let name = this.userName.split('.');
      for (let i = 0; i < name.length; i++) {
        name[i] = name[i][0].toUpperCase() + name[i].substr(1);
      }
      this.userNew = name.join(' ');
    });
  }

  onLogout() {
    this.authCheck.logout();
    this.userNew = ' ';
  }

  breadCrumbFunction() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumbs();
      }
    });
  }
  updateBreadcrumbs(): void {
    this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
  }

  buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: MenuItem[] = []
  ) {
    const children = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    const isRootComponent = route.snapshot.component === HomeComponent;

    if (isRootComponent) {
      this.home = null;
    } else {
      this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    for (const child of children) {
      const routeURL = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const fragment = child.snapshot.fragment;
      if (fragment) {
        url += `#${fragment}`;
      }

      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        const breadcrumb: MenuItem = { label, routerLink: url };
        breadcrumbs.push(breadcrumb);
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
