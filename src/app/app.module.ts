import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { Module2JsonComponent } from './module2-json/module2-json.component';
import { LoginFormComponent } from './login-form/login-form.component';
=======
import { FormComponent } from './form/form.component';
import { DongAbankComponent } from './dong-abank/dong-abank.component';

import { TranslateModule,TranslateLoader  } from '@ngx-translate/core';
import { HttpClientModule, HttpClient  } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { FakeProductComponent } from './fake-product/fake-product.component';

import { BitcoinComponent } from './bitcoin/bitcoin.component';




// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    Module2JsonComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
