import { Component } from '@angular/core';
import { GalleryItem } from '../shared/gallery-item.model';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.css']
})

export class ImgGalleryComponent {
  items: GalleryItem[] = [
    {
      src: 'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg',
      thumbSrc:
        'https://cdn.pixabay.com/photo/2020/06/23/15/17/avocado-5332878_960_720.jpg',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
      thumbSrc:
        'https://cdn.pixabay.com/photo/2017/01/12/02/34/coffee-1973549_960_720.jpg',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
      thumbSrc:
        'https://cdn.pixabay.com/photo/2020/06/26/04/40/flower-5341644_960_720.jpg',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/05/11/18/49/island-5159729_960_720.jpg',
      thumbSrc:
        'https://cdn.pixabay.com/photo/2020/05/11/18/49/island-5159729_960_720.jpg',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2013/11/15/23/18/john-work-garrett-library-211375_960_720.jpg',
      thumbSrc:
        'https://cdn.pixabay.com/photo/2013/11/15/23/18/john-work-garrett-library-211375_960_720.jpg',
    },
  ];
}
