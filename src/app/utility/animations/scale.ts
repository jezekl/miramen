import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const scaleAnimation = trigger('scale', [
  state('inactive', style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)' })),
  state('active',   style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(65px)' })),
  transition('inactive => active', [
    animate('500ms cubic-bezier(.3, .6, .4, 1)', keyframes([
      style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)', offset: 0   }),
      style({ transform: 'perspective(700px) rotateX(7deg) rotateY(-5deg) translateZ(32px)', offset: .4 }),
      style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(65px)', offset: 1   })
    ]))
  ]),
  transition('active => inactive', animate('200ms')),
]);
