import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private baseURL = "http://localhost:8080/assetManagement/assets";
  private addURL = "http://localhost:8080/assetManagement/add";
  private deleteURL= "http://localhost:8080/assetManagement/delete";
  constructor(private httpClient: HttpClient) { }

  getAssetList(): Observable<Asset[]>{
    return this.httpClient.get<Asset[]>(`${this.baseURL}`);

  }

  createAsset(asset: Asset): Observable<Object>{
    return this.httpClient.post(`${this.addURL}`,asset);
  }

  getAssetById(id: number): Observable<Asset>{
    return this.httpClient.get<Asset>(`${this.baseURL}/${id}`);
  }
  updateAsset(id:number, asset: Asset): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,asset);
  }

  deleteAsset(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }
}
