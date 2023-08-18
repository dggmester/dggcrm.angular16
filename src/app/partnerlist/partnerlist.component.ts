import { Component, OnInit } from '@angular/core';
import { partner } from '../model/partner.model';
import { PartnerService } from '../services/partner.service';

@Component({
  selector: 'app-partnerlist',
  templateUrl: './partnerlist.component.html',
  styleUrls: ['./partnerlist.component.scss']
})
export class PartnerlistComponent {
  items: partner[] = [];

  constructor(private ps: PartnerService){}

  ngOnInit(): void{
    this.ps.GetPartnerList().subscribe(plist => this.items = plist);//angular http client autocomplites, nem kell unsubscribe

  }

  AddClick(){
    console.log("add ;)");
  }
}
