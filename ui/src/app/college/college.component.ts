import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

    studentName;
    studentBranch;
    passingYear;
    collegeName;
    approved = false;
    loggedIn;
    invalid;

    collegeForm = new FormGroup({
        studentName: new FormControl(),
        studentBranch: new FormControl(),
        passingYear: new FormControl(),
        collegeName: new FormControl()
    });

    form = new FormGroup({
        login: new FormControl(),
        password: new FormControl()
    });

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
        });
    }


    ngOnInit() {
        this.studentName = 'Rahul Rajput';
        this.studentBranch = 'CSE';
        this.passingYear = '2014';
        this.collegeName = 'Chitkara University';
        this.loggedIn = false;
        this.invalid = false;
    }

    approve() {
        this.approved = true;
    }

    loginSubmit(event) {
        const target = event.target;
        const login = target.querySelector('#login').value;
        const password = target.querySelector('#password').value;
        this.loggedIn = true;
    
        // if (login === 'colg1' && password === '12345') {
        //   this.loggedIn = true;
        //   console.log(1);
        // } else {
        //   this.invalid = true;
        //   console.log(2);
        // }
      }
}