import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { ValidateComponent } from './validate/validate.component';

export const appRoutes: Routes = [

    { path: '', component: StudentComponent, pathMatch: "full" },
    { path: 'university', component: UniversityComponent, pathMatch: "full" },
    { path: 'college', component: CollegeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'validate', component: ValidateComponent }

];

export const routing = RouterModule.forRoot(appRoutes);