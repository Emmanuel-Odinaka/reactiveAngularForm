import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { countries } from '../../data/countries';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  successes = ['true', 'false'];

  occupations = [
    'Frontend Developer',
    'Backend Developer',
    'Designer',
    'Devops Engineer',
  ];
  public countriesData: any = countries;
  submitted = false;
  featureForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          ),
        ],
      ],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      occupation: ['', Validators.required],
      successful: ['', Validators.required],
    });
  }

  get first() {
    return this.featureForm.controls;
  }

  onSubmitted() {
    this.submitted = true;
    if (this.featureForm.invalid) {
      return;
    }

    if (this.featureForm.value.successful === 'true') {
      this.router.navigate(['route']);
      this.toastr.success('Form Accepted', 'Encentral Solutions 😄😄');
    } else {
      this.toastr.error(
        'Something is not quite right',
        'Encentral Solutions 😰😰',
        {
          timeOut: 5000,
        }
      );
      // console.log(this.featureForm.value.successful);
    }
    // console.log(this.featureForm);
  }
}

// public countries: any = fetch('https://restcountries.eu/rest/v2/all')
//   .then((response) => response.json())
//   .then((data) => (this.countries = data))
//   .then(() => console.log(this.countries))
//   .catch((err) => console.error(err));
