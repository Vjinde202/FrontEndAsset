import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent implements OnInit {


  asset: Asset = new Asset();
  constructor(private assetService: AssetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAsset()
  {
    this.assetService.createAsset(this.asset).subscribe( data => {
   console.log(data);
   this.goToAssetList();
    },
    error => console.log(error));
  }

  goToAssetList()
  {
   this.router.navigate(['/assets']);
  }

  onSubmit()
  {
    console.log(this.asset);
    this.saveAsset();
  }

}
