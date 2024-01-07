import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { StrategyComponent } from './components/strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    UserInfoComponent,
    StatisticComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
