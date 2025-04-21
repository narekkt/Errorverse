import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CharacterBubbleComponent } from '../../shared/components/characterBubble/character-bubble.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule, CharacterBubbleComponent]
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('scrollableComments') scrollableComments!: ElementRef;

  characters = [
    {
      avatarSrc: '/assets/images/about/memojiOne.png',
      text: 'I love 404 page',
      bubbleColor: '#D2DAEE',
      position: { top: '183px', left: '160px' }
    },
    {
      avatarSrc: '/assets/images/about/memojiTwo.png',
      text: "It's my favorite selection",
      bubbleColor: '#F4CE9B',
      position: { bottom: '130px', left: '390px' }
    },
    {
      avatarSrc: '/assets/images/about/memojiThree.png',
      text: "It's my inspiration",
      bubbleColor: '#B4E5BC',
      position: { top: '100px', right: '330px' }
    },
    {
      avatarSrc: '/assets/images/about/memojiFour.png',
      text: 'Where do I post it?',
      bubbleColor: '#F3ABA7',
      position: { bottom: '280px', right: '178px' }
    }
  ];

  comments = [
    "Created an unusual error page?",
    "Share it with the world – upload your 404 page",
    "It will appear in the gallery!",
  ];

  ngAfterViewInit(): void {
    const scrollable = this.scrollableComments.nativeElement;
    const button = scrollable.querySelector('.load-page-btn');

    scrollable.addEventListener('scroll', () => {
      const isAtBottom = scrollable.scrollHeight - scrollable.scrollTop <= scrollable.clientHeight + 1;
      if (isAtBottom) {
        button.classList.add('visible');
      }
    })
  }

}
