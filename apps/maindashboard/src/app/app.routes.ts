 
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'reactapp',
    loadChildren: () =>
      import('reactapp/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'angularapp',
    loadChildren: () =>
      import('angularapp/Module').then((m) => m.RemoteEntryModule),
  },
  
];
