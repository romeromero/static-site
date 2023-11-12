import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
   
    photoResults: any[] = [/* your data */];
    constructor (private service: ServiceService) {}
    ngOnInit() {
      this.service.getAlbums().subscribe((data) => {
        console.log(data);
        
        this.photoResults = data;
      });
    }

    
}
