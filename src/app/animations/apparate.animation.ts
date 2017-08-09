import { animate, state, style, transition, trigger } from '@angular/animations';


export const apparateTrigger = trigger('apparateAnimation', [
  transition('void <=> *', [
    style({
      opacity: 0
    }),
    animate('.3s', style({ opacity: 1}))
  ])
])

// export const apparateTrigger = trigger('apparateAnimation', [
//   transition(':enter', [
//     style({
//       opacity: 0
//     }),
//     animate('1s')
//   ]),
//   transition(':leave', animate('1s', style({
//     opacity: 0
//   })))
// ])