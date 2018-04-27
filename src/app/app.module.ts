import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieServviceService } from './movie-servvice.service';
import { AuthGaurdService } from './auth-gaurd.service';
 const appRoutes:Routes =[
   {path:'',component:LoginComponent},
   {path:'movies',component:MoviesComponent},
   {path:'**',component:LoginComponent}
  
 ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieServviceService,
    AuthGaurdService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
