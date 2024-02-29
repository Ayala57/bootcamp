import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponentprincipal{
  @Input()  ejemplo:string='';
  @Input() usuario: number=0;
  title = 'Titulo principal';
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis est excepturi dignissimos voluptatem eos similique nemo, sint rem assumenda, fugit laborum! Molestiae magni repellendus ipsum nam voluptatibus excepturi officiis!";
  card = {
    title:  'Titulo Principal',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam blanditiis est excepturi dignissimos voluptatem eos similique nemo, sint rem assumenda, fugit laborum! Molestiae magni repellendus ipsum nam voluptatibus excepturi officiis!",
  }
}
