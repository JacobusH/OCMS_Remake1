import { SkillTreeNode } from 'app/models/_index';
import { FirebaseListObservable } from 'angularfire2/database';

export class SkillTree {
  
      constructor(
        public key:string = '',
        public nodes: Array<SkillTreeNode> = new Array<SkillTreeNode>()
      ) {}
  }
  