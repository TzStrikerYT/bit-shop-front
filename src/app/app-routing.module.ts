import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';
import { Page404Component } from './routes/page404/page404.component';

const routes: Routes = [
  //{path: laruta, component: elcomponente que se va a renderizar cuando ponga esa ruta}

  {path: "", pathMatch: "full", redirectTo: "/home"},

  {path: "home", component: HomeComponent},
  {path: "admin", component: AdminComponent},

  //siempre de ultimas la pagina 404 que te dice si la ruta no existe
  {path: "**", component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
