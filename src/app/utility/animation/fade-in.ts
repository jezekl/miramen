import { trigger, style, animate, transition, state } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state('in', style({ height: '*' })),
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms cubic-bezier(.25, .8, .25, 1)', style({ opacity: 1 }))
  ])
]);
