// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appName: 'Training Projects',
  production: false,
  projects: [
    { id: 1, name: 'Learn Angular' },
    { id: 2, name: 'Develop My Dream app' },
    { id: 3, name: 'Travel around the world' },
    { id: 4, name: 'Clean my room' },
    { id: 5, name: '5 ...' },
    { id: 6, name: '6 ...' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
