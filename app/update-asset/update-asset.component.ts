import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  id!:number;
  asset: Asset=new Asset();

  constructor(private assetService: AssetService ,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];

    this.assetService.getAssetById(this.id).subscribe(data => {
      this.asset=data;
    }, 
    error=> console.log(error));
  }
  onSubmit(){
    this.assetService.updateAsset(this.id, this.asset).subscribe(data =>{
      this.goToAssetList();

    },
    error =>
    console.log(error));
  }

  goToAssetList()
  {
   this.router.navigate(['/assets']);
  }

}
