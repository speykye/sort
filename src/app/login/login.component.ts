import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../components/form.service';
import { FormBase } from '../components/form-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form$!: Observable<FormBase<any>[]>;

  constructor(private router: Router,private serve: FormService) {
    this.form$ = serve.getQuestion();
  }

  async toHome(data: any) {
    console.log(data);
    setTimeout(() => {
      this.router.navigate(['/home']);
      clearTimeout();
    }, 2000);
  }

  ngOnInit(): void {
  }

}
