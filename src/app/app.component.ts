import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Piano';

  playAudio(n: number): void {
    const audio = new Audio();
    audio.src = `../assets/audios/note${n}.wav`;
    audio.load();
    audio.play();
  }
}
