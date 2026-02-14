import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

const LOADING_TIMEOUT_MS = 2500;

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  isVisible = true;
  private loadingTimer?: ReturnType<typeof setTimeout>;
  private loadHandler?: () => void;

  ngOnInit(): void {
    this.loadingTimer = setTimeout(() => {
      this.isVisible = false;
    }, LOADING_TIMEOUT_MS);

    this.loadHandler = () => {
      this.isVisible = false;
    };
    window.addEventListener('load', this.loadHandler);
  }

  ngOnDestroy(): void {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }
    if (this.loadHandler) {
      window.removeEventListener('load', this.loadHandler);
    }
  }
}
