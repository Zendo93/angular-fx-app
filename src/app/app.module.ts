import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ResultComponent } from './result/result.component';
import {MatCardModule} from "@angular/material/card";
import { ItemComponent } from './item/item.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {searchReducer} from "./state/search.reducer";
import {resultReducer} from "./state/result.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ResultEffects} from "./state/result.effects";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ResultComponent,
    ItemComponent
  ],
    imports: [
        StoreModule.forRoot({ search: searchReducer, result: resultReducer, router: routerReducer }),
        EffectsModule.forRoot([ResultEffects]),
        AppRoutingModule,
        StoreRouterConnectingModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
