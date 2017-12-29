import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './apollo.config';
import { AppComponent } from './app.component';
import { CreateLinkComponent } from './create-link/create-link.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, LinkItemComponent, LinkListComponent, CreateLinkComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule, GraphQLModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
