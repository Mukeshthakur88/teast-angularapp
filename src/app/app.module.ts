import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistationComponent } from './component/registation/registation.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {DatabaseService} from './services/database.service';
import { NavbarComponent } from './component/left-navbar/left-navbar.component';
import { TopNavbarComponent } from './component/top-navbar/top-navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TruncatePipe } from './appPipe/truncate.pipe'
@NgModule({
  declarations: [
    AppComponent,
    RegistationComponent,
    DashboardComponent,
    NavbarComponent,
    TopNavbarComponent,
    SpinnerComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   FormsModule, 
    
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
