import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerDiaComponentprincipal } from './primer-dia/primer-dia.component';
import { SegundoDiaComponentprincipal } from './segundo-dia/segundo-dia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerDiaComponentprincipal,SegundoDiaComponentprincipal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dinamico = 'La variable de hijo soy yo';
  title = 'Titulo principal';
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis est excepturi dignissimos voluptatem eos similique nemo, sint rem assumenda, fugit laborum! Molestiae magni repellendus ipsum nam voluptatibus excepturi officiis!";
  card = {
    title:  'Titulo Principal',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis est excepturi dignissimos voluptatem eos similique nemo, sint rem assumenda, fugit laborum! Molestiae magni repellendus ipsum nam voluptatibus excepturi officiis!",
  }
}
