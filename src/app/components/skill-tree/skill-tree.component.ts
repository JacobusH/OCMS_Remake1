import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ITreeOptions, TreeComponent, IActionHandler, TreeModel, TreeNode, ITreeState, IActionMapping, TREE_ACTIONS } from 'angular-tree-component';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.css']
})
export class SkillTreeComponent implements OnInit {
  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  @Input('nodes') nodesInput;

  nodes = [
    {
      key: 1,
      name: 'root1'
    },
    {
      key: 2,
      name: 'root2',
      children: [
        { key: 3, name: 'child1'},
        { key: 4, name: 'child2', children: [
          { key: 4, name: 'grandchild1'},
          { key: 5, name: 'grandchild2'}
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
      key: 100,
      name: 'root1'
    });
    this.tree.treeModel.update();
  }

  addChildNode($event) {

  }


}
