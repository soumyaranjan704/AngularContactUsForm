import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactUsForm } from 'src/app/form-data-advance';
import { environment } from 'src/environments/environment';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    contactUsDetails = new ContactUsForm();

    constructor(private utilityService: UtilityService) { }
  
    ngOnInit(): void {
    }
  
    contactNewRecord(form: NgForm) {
      let url = environment.contactUsBaseUrl;
      let requestModel = form.value;
      console.log(form.value);
      let contactRef =  document.getElementById("contactUsForm")  as HTMLFormElement;
      //contactRef.reset();
      this.utilityService.postDataToService(url, requestModel).subscribe(data => {
      
        console.log("Success");
      }, error => {
        console.log("Error");
      });
    
    }
  }
  