import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MediaModule { }
