import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideUpDownAnimation =
trigger('slideUpDownAnimation', [
  state('down', style({
    transform: 'translateY(0)'
  })),
  state('up', style({
    transform: 'translateY(91%)'
  })),
  transition('down <=> up', animate(300))
]);

    