import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'armaduras',
    loadChildren: () => import('./shared/components/armaduras/armaduras.module').then( m => m.ArmadurasPageModule)
  },
  {
    path: 'espadas',
    loadChildren: () => import('./shared/components/espadas/espadas.module').then( m => m.EspadasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
