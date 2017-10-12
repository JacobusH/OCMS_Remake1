import { Component, OnInit } from '@angular/core';
import { ITreeOptions } from 'angular-tree-component';
import { SkillTree } from 'app/models/_index';
import { AF } from 'app/providers/af.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor(private af:AF) { }

  ngOnInit() {
  }

  createSkillTree() {
    this.af.createSkillTree();
  }

}
