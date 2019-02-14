import { CidadeDTO } from './../../models/cidade.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService {
    
    constructor(public http: HttpClient){

    }

    findAll(id_estado: string) : Observable<CidadeDTO[]>{
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${id_estado}/cidades`);
    }
}