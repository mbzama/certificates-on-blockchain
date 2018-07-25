import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    studentName;
    studentBranch;
    passingYear;
    collegeName;
    degree;
    approved = false;
    succesfullSubmission = false;
    beforeSubmission = true;

    studentForm = new FormGroup({
        studentEmail: new FormControl(),
        studentUniqueId: new FormControl()
    });

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.studentForm = this.fb.group({
            studentEmail: ['', Validators.required],
            studentUniqueId: ['', Validators.required],
        });
    }

    ngOnInit() {
        this.studentName = 'Rahul Rajput';
        this.studentBranch = 'CSE';
        this.passingYear = '2014';
        this.degree = 'B.E';
        this.collegeName = 'School of Management Studies';
    }

    submitDetails(event) {
        const target = event.target;
        const studentEmail = target.querySelector('#studentEmail').value;
        const studentUniqueId = target.querySelector('#studentUniqueId').value;

        console.log(studentEmail, studentUniqueId);
        this.succesfullSubmission = true;
        this.beforeSubmission = false;
    }

    approve() {
        this.approved = true;
    }
}