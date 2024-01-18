import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'lookup', pathMatch: 'full'
    },
    {
        path: 'lookup',
        loadComponent: ()=> import('./components/lookup/lookup.component').then(_ => _.LookupComponent)
    },
    {
        path: 'bggsearch',
        loadComponent: ()=> import('./components/bgg-search/bgg-search.component').then(_ => _.BggSearchComponent)
    }
];
