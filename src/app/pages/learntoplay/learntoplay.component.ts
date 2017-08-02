import { Component, OnInit, OnDestroy } from '@angular/core';
import { LearnToPlay } from 'app/models/learntoplay.model';
import { AF } from 'app/providers/af.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learntoplay',
  templateUrl: './learntoplay.component.html',
  styleUrls: ['./learntoplay.component.css']
})
export class LearntoplayComponent implements OnInit, OnDestroy {
  private model = new LearnToPlay('',  '', '', '');
  id: string;
  private sub: any;

  constructor(private afService: AF,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.model = new LearnToPlay('', '', '', this.id);
    });
  }

  saveLTP() {
    console.log('new ltp: ', this.model);
    this.afService.saveLTP(this.model);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
