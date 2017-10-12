import { UUID } from 'angular2-uuid';

export class SkillTreeNode {
  
      constructor(
        public key:string = UUID.UUID(),
        public name: string = 'testNode',
        public complete: boolean = false,
        public children: Array<SkillTreeNode> = []
      ) {}
  }
  