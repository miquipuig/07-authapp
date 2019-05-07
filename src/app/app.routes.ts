import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuardService } from './services/auth-guard.service';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },

    { path: 'protegida',
      component: ProtegidaComponent,
      canActivate: [AuthGuardService]
    },

    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    //{ path: '**', component: HomeComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);


