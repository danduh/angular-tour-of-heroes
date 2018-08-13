import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component/dashboard.component';
import {HeroesComponent} from './heros.component/heroes.component';
import {HeroDetailComponent} from './hero-details.component/hero-detail.component';
import {HeroSearchComponent} from './hero-search.component/hero-search.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {WebCoreModule} from 'web-core';
// import {WebCoreModule} from 'web-core';

const EFFECTS = [];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        WebCoreModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(EFFECTS),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
            delay: 200,
            passThruUnknownUrl: true
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
        })
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroSearchComponent,
        HeroesComponent,
        HeroDetailComponent,
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
