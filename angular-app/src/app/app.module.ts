import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './apollo.config';
import { AppComponent } from './app.component';
import { CreateLinkComponent } from './create-link/create-link.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';

@NgModule({
  declarations: [AppComponent, LinkItemComponent, LinkListComponent, CreateLinkComponent],
  imports: [BrowserModule, FormsModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
