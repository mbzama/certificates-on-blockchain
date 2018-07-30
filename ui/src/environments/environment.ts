// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getUnverifiedStudentsData: 'http://192.168.3.17:3000/unverifiedstudents',
  getVerifiedStudentsData: 'http://192.168.3.17:3000/verifiedstudents',
  postStudentForConfirmation: 'http://192.168.3.17:3000/universityverify',
  getCollegeStudents: 'http://192.168.3.17:3000/collegestudents',
  getCollegeVerify: 'http://192.168.3.17:3000/collegeverify',
  getStudent: 'http://192.168.3.17:3000/getStudent',
  verifyStudent: 'http://192.168.3.17:3000/studentverify'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
