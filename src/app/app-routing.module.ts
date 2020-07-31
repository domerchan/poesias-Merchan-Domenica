import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'poemas',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'poemas',
    loadChildren: () => import('./shared/pages/poemas/poemas.module').then( m => m.PoemasPageModule)
  },
  {
    path: 'subir-poema',
    loadChildren: () => import('./shared/pages/subir-poema/subir-poema.module').then( m => m.SubirPoemaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
