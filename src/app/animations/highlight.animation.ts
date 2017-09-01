import { trigger, state, animate, transition, style } from '@angular/animations';

export const highlightAnimation =
    trigger('highlightAnimation', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]);