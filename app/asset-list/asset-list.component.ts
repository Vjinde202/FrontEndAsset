import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Asset} from '../asset'
import { AssetService } from '../asset.service';
@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assets!: Asset[];

  constructor(private assetService : AssetService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAssets();
  }
  private getAssets()
  {
    this.assetService.getAssetList().subscribe(data => {
      this.assets=data;
    });
  }

  assetDetails(id:number){
    this.router.navigate(['asset-details',id])
  }
  updateAsset(id: number){
    this.router.navigate(['update-asset', id]);
  }

  deleteAsset(id: number)
  {
     this.assetService.deleteAsset(id).subscribe(data => {
      console.log(data);
       this.getAssets();
     })
  }
}
