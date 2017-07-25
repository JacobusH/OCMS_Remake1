import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation = 
trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [
        // animation at start
        style({opacity: 0}),
        
        // animation at end
        animate('4s', style({opacity: 1}))
    ]),
]);