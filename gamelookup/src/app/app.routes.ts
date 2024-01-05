import { Routes } from '@angular/router';
import { LookupComponent } from './components/lookup/lookup.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'lookup', pathMatch: 'full'
    },
    {
        path: 'lookup', 
        loadComponent: ()=> import('./components/lookup/lookup.component').then(_ => _.LookupComponent)
    }
];
