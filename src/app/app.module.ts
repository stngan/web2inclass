import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { M2B11JsonobjectComponent } from './m2-b11-jsonobject/m2-b11-jsonobject.component';
import { M2B12ArrayproductComponent } from './m2-b12-arrayproduct/m2-b12-arrayproduct.component';
import { M2B13ProductdetailComponent } from './m2-b13-productdetail/m2-b13-productdetail.component';
import { M2B14ProductcatalogComponent } from './m2-b14-productcatalog/m2-b14-productcatalog.component';
import { M2B15ProductHTTPserviceComponent } from './m2-b15-product-httpservice/m2-b15-product-httpservice.component';
import { M2B17JsonobjectcustomerComponent } from './m2-b17-jsonobjectcustomer/m2-b17-jsonobjectcustomer.component';
import { M2B18JsonarraygroupcustomerComponent } from './m2-b18-jsonarraygroupcustomer/m2-b18-jsonarraygroupcustomer.component';
import { M3B21LoginscreenComponent } from './m3-b21-loginscreen/m3-b21-loginscreen.component';
import { M2B16ProductHttpserviceerrorComponent } from './m2-b16-product-httpserviceerror/m2-b16-product-httpserviceerror.component';


@NgModule({
  declarations: [
    AppComponent,
    M2B11JsonobjectComponent,
    M2B12ArrayproductComponent,
    M2B13ProductdetailComponent,
    M2B14ProductcatalogComponent,
    M2B15ProductHTTPserviceComponent,
    M2B17JsonobjectcustomerComponent,
    M2B18JsonarraygroupcustomerComponent,
    M3B21LoginscreenComponent,
    M2B16ProductHttpserviceerrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormGroup,
    FormControl,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
