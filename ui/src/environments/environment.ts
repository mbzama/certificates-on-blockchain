// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getDebtorAPI : 'http://192.168.2.223:3000/getDebtor',
  getSecuredPartyAPI : 'http://192.168.2.223:3000/getsecuredparties',
  getCollateralAPI : 'http://192.168.2.223:3000/getcollaterol',
  getStatesAPI : 'http://192.168.2.223:3000/getstates',
  getJurisdictionAPI : 'http://192.168.2.223:3000/getjurisdictions',
  postNewFilling : 'http://192.168.2.223:3000/submitdoc'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
