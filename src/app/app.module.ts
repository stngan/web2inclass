import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DongAbankComponent,
    FakeProductComponent,
    BitcoinComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
