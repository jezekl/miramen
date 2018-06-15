import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GuitarGroup } from '../../models/guitar-group';

@Component({
  selector: 'miramen-select-guitar-group',
  templateUrl: './select-guitar-group.component.html',
  styleUrls: ['./select-guitar-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectGuitarGroupComponent implements OnInit {

  @Input() groups: GuitarGroup[];
  @Input() activeGroup: GuitarGroup;

  @Output() groupChange: EventEmitter<GuitarGroup> = new EventEmitter<GuitarGroup>();

  constructor() { }

  ngOnInit() { }

}
