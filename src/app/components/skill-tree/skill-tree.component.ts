import { Component, OnInit, ViewChild } from '@angular/core';
import { ITreeOptions, TreeComponent, IActionHandler, TreeModel, TreeNode, ITreeState, IActionMapping, TREE_ACTIONS } from 'angular-tree-component';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.css']
})
export class SkillTreeComponent implements OnInit {
  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  nodes = [
    {
      id: 1,
      name: 'root1'
    },
    {
      id: 2,
      name: 'root2',
      children: [
        { id: 3, name: 'child1'},
        { id: 4, name: 'child2', children: [
          { id: 4, name: 'grandchild1'},
          { id: 5, name: 'grandchild2'}
        ] }
      ]
    }
  ];

  actionMapping: IActionMapping = {
    mouse: {
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    }
  };

  options: ITreeOptions = {
    actionMapping: this.actionMapping,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    animateAcceleration: 1.3,
    animateExpand: true,
    animateSpeed: 27,
    childrenField: 'children',
    displayField: 'nodename',
    dropSlotHeight: 2,
    idField: 'key'
  };

  constructor() { }

  ngOnInit() {
  }

  addNode() {
    this.nodes.push({
      id: 100,
      name: 'root1'
    });
    this.tree.treeModel.update();
  }

  addChildNode($event) {

  }


}
