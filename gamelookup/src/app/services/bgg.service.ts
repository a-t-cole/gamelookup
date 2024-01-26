import { Injectable } from '@angular/core';
import { BggClient } from 'boardgamegeekclient';
import { BggSearchDto, BggThingDto } from 'boardgamegeekclient/dist/esm/dto';

@Injectable({
  providedIn: 'root'
})
export class BggService {

  private bggClient: BggClient = BggClient.Create(); 
  constructor() { }

  async getItemById(id: number): Promise<BggThingDto[]>{
    return await this.bggClient.thing.query({id: id})
  }
  async searchItemsByTerm(term: string): Promise<BggSearchDto[]>{
    try{
      const result:BggSearchDto[] = await this.bggClient.search.query({query:term, type: 'boardgame'}) 
      return result
    }catch (e){
      console.log(e); 
      return []; 
    }
  }
}
