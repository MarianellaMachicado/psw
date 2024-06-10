import { Routes } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

export const routes: Routes = [
    {path: 'recetas', component:RecetasComponent},
    {path: 'youtube', component:YoutubeComponent},
    {path: '', component:RecetasComponent},
];
