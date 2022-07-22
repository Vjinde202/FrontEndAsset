import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {

  id!:number
  asset!: Asset

  constructor(private router: ActivatedRoute,
    private assetService: AssetService) { }

  ngOnInit(): void {

    this.id=this.router.snapshot.params['id'];
    this.asset= new Asset();
    this.assetService.getAssetById(this.id).subscribe(data => {
      this.asset=data;
    });

  }

}
