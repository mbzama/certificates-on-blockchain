import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {


    dat;
    
    flag = false;
    form = new FormGroup({
    });
    constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

    validate(event) {
        const target = event.target;
        const validate = target.querySelector('#validate').value;

        const obj = { "id" : validate};
        console.log(obj);

        this.httpClient.post('http://localhost:3000/find', obj, {
            responseType: 'text',
        })
            .subscribe(
                response => {
                   // console.log(response);
                   this.flag=true;
                    this.dat = response;
                    console.log(this.dat);
                    console.log(this.dat.blockNumber);

                },
                err => {
                    console.log("Error Ocurred" + err);
                }
            )
    }
}