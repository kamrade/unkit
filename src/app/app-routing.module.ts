import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/ui-kit', pathMatch: 'full' },
  { path: 'ui-kit', component: UiKitComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/ui-kit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
