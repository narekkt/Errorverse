import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})

export class HeaderComponent implements OnInit, OnDestroy {
  currentTime: string = ''
  private timer: any

  ngOnInit(): void {
    this.updateTime();
    this.timer = setInterval(()=> {
      this.updateTime()
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateTime(): void {
    const now = new Date();

    this.currentTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }
}
