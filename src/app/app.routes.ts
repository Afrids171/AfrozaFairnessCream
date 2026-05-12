import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Bplus } from './bplus/bplus';
import { Soap } from './soap/soap';
import { BridalCream } from './bridal-cream/bridal-cream';
import { LipCream } from './lip-cream/lip-cream';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'b-plus-skin-cream',component:Bplus},
    {path:'brightening-facewash',component:Soap},
    {path:'bridal-glow-cream',component:BridalCream},
    {path:'lip-cream',component:LipCream}
];
