import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';

const routes : Routes = [
    {path: 'assets', component: AssetListComponent},
    {path: 'create-asset', component: CreateAssetComponent},
    {path: ' ',redirectTo: 'assets', pathMatch: 'full'},
    {path: 'update-asset/:id', component: UpdateAssetComponent},
     {path : 'asset-details/:id', component : AssetDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }