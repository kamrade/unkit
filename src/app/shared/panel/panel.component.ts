import { Component, OnInit, Input } from '@angular/core';

export type NlPanelSize = 'small' | 'default' | 'large';
export type NlPanelColor = 'dark' | 'default' | 'white';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() containerized = false;
  @Input() size: NlPanelSize = 'default';
  @Input() color: NlPanelColor = 'default';

  constructor() {}
  ngOnInit(): void {}

}
