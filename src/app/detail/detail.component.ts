import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BimobjectService } from '../services/bimobject.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail: any = '';
  constructor( private route:ActivatedRoute, public bimService:BimobjectService) {
    route.params.subscribe(data => {
      bimService.detail( data['id'])
      .subscribe(ans => {
        this.detail = ans;
        console.log(this.detail);
      });
    });
  }
  ngOnInit(): void {
    
  }
}
