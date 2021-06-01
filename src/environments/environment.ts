// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:3000',
  apiUrl: 'https://loscar-backend.herokuapp.com',
  firebaseConfig: {
    apiKey: "AIzaSyAcpWAvkgiRPYZ9qeR59ndE2YX4aamH9yw",
    authDomain: "loscar-c5fd3.firebaseapp.com",
    projectId: "loscar-c5fd3",
    storageBucket: "loscar-c5fd3.appspot.com",
    messagingSenderId: "198067674871",
    appId: "1:198067674871:web:9e66b77c44809733b1fdf2",
    measurementId: "G-ZK00DVSZ19"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
