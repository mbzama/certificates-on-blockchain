import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { PostComponent } from './post/post.component';

export const appRoutes: Routes = [


    { path: 'university', component: UniversityComponent, pathMatch: "full" },

    { path: 'college', component: CollegeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'post', component: PostComponent }

];

export const routing = RouterModule.forRoot(appRoutes);