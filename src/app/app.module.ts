import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importe FormsModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Declarar o AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Importar FormsModule para permitir o uso de ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap o AppComponent
})
export class AppModule { }
