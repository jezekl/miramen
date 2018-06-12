import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'miramen-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  get hostElement(): HTMLElement {
    return this._elRef.nativeElement;
  }

  constructor(
    private _elRef: ElementRef
  ) { }

  ngOnInit() { }

}
