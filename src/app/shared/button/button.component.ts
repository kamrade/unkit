import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, HostBinding } from '@angular/core';

export type NlButtonType = 'primary' | 'secondary' | 'danger' | 'link' | null;
export type NlButtonSize = 'large' | 'default' | 'small';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[nl-button], a[nl-button]',
  exportAs: 'nlButton',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() nlType: NlButtonType = null;
  @Input() nlSize: NlButtonSize = 'default';
  @Input() nlBlock = false;
  @Input() nlOutline = false;

  // Basic
  @HostBinding('class.nl-btn') classBtn = true;

  // Theming
  @HostBinding('class.nl-btn-primary') get primary() {
    return this.nlType === 'primary' && !this.nlOutline;
  }
  @HostBinding('class.nl-btn-secondary') get secondary() {
    return this.nlType === 'secondary' && !this.nlOutline;
  }
  @HostBinding('class.nl-btn-danger') get danger() {
    return this.nlType === 'danger' && !this.nlOutline;
  }

  // Theming outline
  @HostBinding('class.nl-btn-outline-primary') get outlinePrimary() {
    return this.nlType === 'primary' && this.nlOutline;
  }
  @HostBinding('class.nl-btn-outline-secondary') get outlineSecondary() {
    return this.nlType === 'secondary' && this.nlOutline;
  }
  @HostBinding('class.nl-btn-outline-danger') get outlineDanger() {
    return this.nlType === 'danger' && this.nlOutline;
  }

  // Sizing
  @HostBinding('class.nl-btn-lg') get btnLg() {
    return this.nlSize === 'large';
  }
  @HostBinding('class.nl-btn-sm') get btnSm() {
    return this.nlSize === 'small';
  }

  // Block
  @HostBinding('class.nl-btn-block') get btnBlock() {
    return this.nlBlock === true;
  }

  constructor() { }

  ngOnInit(): void {}

}
