import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UiKitNavigationComponent } from './pages/ui-kit/ui-kit-navigation/ui-kit-navigation.component';
import { UiKitButtonsComponent } from './pages/ui-kit/ui-kit-buttons/ui-kit-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    UiKitComponent,
    SettingsComponent,
    HeaderComponent,
    MainMenuComponent,
    UserMenuComponent,
    UiKitNavigationComponent,
    UiKitButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
