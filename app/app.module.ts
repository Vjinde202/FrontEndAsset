import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { FormsModule } from '@angular/forms';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    CreateAssetComponent,
    UpdateAssetComponent,
    AssetDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
