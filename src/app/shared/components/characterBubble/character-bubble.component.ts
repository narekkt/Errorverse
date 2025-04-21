import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-bubble',
  templateUrl: './character-bubble.component.html',
  styleUrls: ['./character-bubble.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CharacterBubbleComponent {
  @Input() avatarSrc: string = '';
  @Input() text: string = '';
  @Input() bubbleColor: string = '#FFF5E6';
  @Input() position: { top?: string, left?: string, bottom?: string, right?: string } = {};
}
