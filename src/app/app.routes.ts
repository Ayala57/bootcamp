import { Routes } from '@angular/router';
import { PrimerDiaComponentprincipal } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';

export const routes: Routes = [
    {
        path:'',
        component: PrimerDiaComponentprincipal
    },
    {
        path:'primer-dia',
        component: PrimerDiaComponentprincipal
    },
    {
        path:'segundo-dia',
        component: SegundoDiaComponent
    },
    {
        path:'tercer-dia',
        component: TercerDiaComponent
    }
];
