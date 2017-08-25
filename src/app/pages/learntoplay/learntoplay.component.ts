import { Component, OnInit, OnDestroy } from '@angular/core';
import { Signup } from 'app/models/_index';
import { AF } from 'app/providers/af.service';
import { ActivatedRoute } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-learntoplay',
  templateUrl: './learntoplay.component.html',
  styleUrls: ['./learntoplay.component.css']
})
export class LearntoplayComponent implements OnInit, OnDestroy {
  private model = new Signup('', '' , '', '', '', '', 0, false);
  id: string;
  private sub: any;
  ltpForm: FormGroup;

  constructor(private afService: AF,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.model = new Signup('', '' , '', '', this.id, '', 0, false);
    });
  }

  saveLTP(f: NgForm) {
    console.log('new ltp: ', this.model);
    this.afService.saveSignup(this.model);
    f.reset();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
