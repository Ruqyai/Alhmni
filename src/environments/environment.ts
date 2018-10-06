// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDVqwgjm08DZyGQaS7dohBCabHBpn_mllg',
    authDomain: 'inspire-me-79fd8.firebaseapp.com',
    databaseURL: 'https://inspire-me-79fd8.firebaseio.com',
    projectId: 'inspire-me-79fd8',
    storageBucket: 'inspire-me-79fd8.appspot.com',
    messagingSenderId: '563440029154'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
