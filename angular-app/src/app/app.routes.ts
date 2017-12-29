import { Routes } from '@angular/router';
import { CreateLinkComponent } from './create-link/create-link.component';
import { LinkListComponent } from './link-list/link-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LinkListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateLinkComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
