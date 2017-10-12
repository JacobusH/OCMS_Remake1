import { Component, OnInit } from '@angular/core';
import { SkillTree } from 'app/models/_index';
import { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private af:AF) { }

  ngOnInit() {
  }

}
