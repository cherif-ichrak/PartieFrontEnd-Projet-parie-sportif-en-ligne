import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { StatsComponent } from './components/stats/stats.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TemasInfoComponent } from './components/temas-info/temas-info.component';
import { MatchEditComponent } from './components/match-edit/match-edit.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsberixVoyellePipe } from './pipes/asberix-voyelle.pipe';
import { HttpClientModule } from "@angular/common/http";
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BannerComponent } from './components/banner/banner.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BlogComponent,
    ResultComponent,
    NewsComponent,
    CupEventComponent,
    StatsComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    NewsInfoComponent,
    MatchesComponent,
    AdminComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayerTableComponent,
    MatchInfoComponent,
    TeamsComponent,
    TemasInfoComponent,
    MatchEditComponent,
    ReversePipe,
    AsberixVoyellePipe,
    EditTeamComponent,
    EditPlayerComponent,
    PlayerInfoComponent,
    ProfileComponent,
    BannerComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
