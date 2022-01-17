import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TabViewModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
