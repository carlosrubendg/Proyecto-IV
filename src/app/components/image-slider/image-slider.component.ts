import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/slide1.jpg',
      alt: 'Reparación de celulares profesional',
      caption: 'Expertos en reparación de dispositivos móviles'
    },
    {
      image: 'assets/slide2.webp',
      alt: 'Cambio de display garantizado',
      caption: 'Pantallas de alta calidad con garantía'
    },
    {
      image: 'assets/slide3.jpg',
      alt: 'Reparaciones a nivel tarjeta',
      caption: 'Soluciones técnicas avanzadas'
    },
    {
      image: 'assets/slide4.jpg',
      alt: 'Servicio de liberación de celulares',
      caption: 'Liberamos tu dispositivo para cualquier compañía'
    }
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambiar slide cada 5 segundos
  }

  stopSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  previousSlide(): void {
    this.stopSlideshow();
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.startSlideshow();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.stopSlideshow();
    this.currentSlide = index;
    this.startSlideshow();
  }
}