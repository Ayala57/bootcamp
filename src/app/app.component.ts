import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponentprincipal } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { ProyectoFinalComponent } from './proyecto-final/proyecto-final.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimerDiaComponentprincipal,SegundoDiaComponent,TercerDiaComponent,ProyectoFinalComponent,RouterModule],
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
