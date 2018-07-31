import { trigger, style, animate, transition, query } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 }),
      animate('600ms cubic-bezier(.25, .8, .25, 1)', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);
