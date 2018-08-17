// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getUnverifiedStudentsData: 'http://52.172.13.43:3000/unverifiedstudents',
  getVerifiedStudentsData: 'http://52.172.13.43:3000/verifiedstudents',
  postStudentForConfirmation: 'http://52.172.13.43:3000/universityverify',
  getCollegeStudents: 'http://52.172.13.43:3000/collegestudents',
  getCollegeVerify: 'http://52.172.13.43:3000/collegeverify',
  getStudent: 'http://52.172.13.43:3000/getStudent',
  verifyStudent: 'http://52.172.13.43:3000/studentverify',
  validate: 'http://52.172.13.43:3000/validate',
  addStudent: 'http://52.172.13.43:3000/createcertificate'
};
