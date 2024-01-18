import { Injectable } from '@angular/core';
import { BggSearchParams, BggThingResponse, getBggSearch, getBggThing, SearchType } from 'bgg-xml-api-client'

@Injectable({
  providedIn: 'root'
})
export class BggService {

  constructor() { }

  async getItemById(id: string): Promise<BggThingResponse>{
    return await getBggThing({id: id})
  }
  async searchItemsByTerm(term: string): Promise<any[]>{
    const params = {query: term,  type: 'boardgame'} as BggSearchParams; 
    return (await getBggSearch( params )).item; 
  }
}
