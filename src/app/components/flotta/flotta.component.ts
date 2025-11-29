import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flotta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flotta.component.html',
  styleUrl: './flotta.component.css'
})
export class FlottaComponent implements OnInit {
  selectedIndex = 0;
  
  // Using high-quality yacht images
  boats = [
    {
      id: 1,
      name: 'Python C 33',
      description: 'Il perfetto equilibrio tra sportività ed eleganza. 33 piedi di pura adrenalina con interni di lusso.',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '9.90m', speed: '50kn', guests: '10' }
    },
    {
      id: 2,
      name: 'Python C-27 S',
      description: 'Agile, veloce e incredibilmente spazioso. Ideale per chi cerca prestazioni senza rinunciare al comfort.',
      image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe79ba02?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '8.50m', speed: '45kn', guests: '8' }
    },
    {
      id: 3,
      name: 'Python 50 Luxury',
      description: 'L\'ammiraglia che ridefinisce gli standard. Spazi immensi e finiture artigianali di altissimo livello.',
      image: 'https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '15.00m', speed: '40kn', guests: '14' }
    },
    {
      id: 4,
      name: 'Python Sport 40',
      description: 'Design aggressivo e prestazioni da corsa. Per chi vuole dominare il mare con stile.',
      image: 'https://images.unsplash.com/photo-1544161513-0179fe746d32?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '12.00m', speed: '55kn', guests: '12' }
    },
    {
      id: 5,
      name: 'Python Explorer',
      description: 'Costruito per l\'avventura. Robustezza e autonomia per esplorare ogni angolo del Mediterraneo.',
      image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '13.50m', speed: '35kn', guests: '12' }
    }
  ];

  get selectedBoat() {
    return this.boats[this.selectedIndex];
  }

  ngOnInit() {
    // Auto-rotate optional, can be enabled if requested
    // setInterval(() => this.rotateCarousel(1), 5000);
  }

  rotateCarousel(direction: number) {
    this.selectedIndex = (this.selectedIndex + direction + this.boats.length) % this.boats.length;
  }
  
  selectBoat(index: number) {
    this.selectedIndex = index;
  }
}
