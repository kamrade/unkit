import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { UiKitNavigationComponent } from './pages/ui-kit/ui-kit-navigation/ui-kit-navigation.component';
import { UiKitButtonsComponent } from './pages/ui-kit/ui-kit-buttons/ui-kit-buttons.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/ui-kit', pathMatch: 'full' },
  {
    path: 'ui-kit',
    component: UiKitComponent,
    children: [
      {
        path: '',
        component: UiKitNavigationComponent
      }, {
        path: 'buttons',
        component: UiKitButtonsComponent
      }
    ]
  },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/ui-kit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
