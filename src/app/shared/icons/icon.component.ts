import {Component, OnInit, AfterViewInit,  Input, ViewChild} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import * as icons from './icons.svg-data';

import { NlIcons } from './icons.svg-data';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, AfterViewInit {

  @Input() name: NlIcons = null;
  @Input() size = 24;
  @Input() color = '#1E222A';
  @Input() weight = 2;

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // TODO: Implement icon style with predefined size, color and weight
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  @ViewChild('iconWrapper') iconWrapper;

  svg: SafeHtml;
  icons = icons;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.icons[this.name]) {
      this.svg = this.sanitizer.bypassSecurityTrustHtml(this.icons[ this.name ]);
    } else {
      throw new Error('No such icon:' + this.name);
    }
  }

  ngAfterViewInit() {
    const innerSvg = this.iconWrapper.nativeElement.querySelector('svg');
    innerSvg.style.width = `${this.size}px`;
    innerSvg.style.height = `${this.size}px`;
    innerSvg.style.stroke = this.color;
    innerSvg.style.strokeWidth = this.weight;
  }

}
