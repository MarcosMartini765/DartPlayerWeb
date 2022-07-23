import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.css']
})
export class ImageTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() src!: string;
  @Input() alt!: string;
  @Input() subtitle!: string;

}
