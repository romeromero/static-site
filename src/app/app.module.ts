import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './media/photos/photos.component';
import { AlbumsComponent } from './media/albums/albums.component';

const appRoutes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'albums', component: AlbumsComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
