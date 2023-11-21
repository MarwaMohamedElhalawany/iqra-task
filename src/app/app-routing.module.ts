import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PhotosComponent } from './Component/photos/photos.component';
import { RegisterComponent } from './Component/register/register.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'', redirectTo:'/register', pathMatch:'full' },
  {path:'home', canActivate:[AuthGuard],component:HomeComponent },
  {path:'photos',canActivate:[AuthGuard] , component:PhotosComponent },
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
