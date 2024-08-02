import { AfterContentInit, Component, Input } from '@angular/core';

interface Source {
  path: string;
  media: string;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html'
})
export class ImageComponent implements AfterContentInit {
  @Input() path: string = '';
  @Input() alt: string = '';
  sources: Source[] = [];

  constructor() { }

  ngAfterContentInit(): void {
    this.generateSizes()
  }

  generateSizes() {
    const splitPath = this.path.split("/")
    const fullName = splitPath.pop();
    const path = splitPath.join("/");
    const splitName = fullName?.split(".") ?? [];
    const ext = splitName.pop();
    const name = splitName.pop();

    this.sources = [
      {
        path: `${path}/${name}--largue.webp`,
        media: '(min-width: 2000px)'
      },
      {
        path: `${path}/${name}--medium.webp`,
        media: '(min-width: 640px)'
      },
      {
        path: `${path}/${name}--small.webp`,
        media: '(min-width: 200px)'
      },
      {
        path: `${path}/${name}--largue.${ext}`,
        media: '(min-width: 2000px)'
      },
      {
        path: `${path}/${name}--medium.${ext}`,
        media: '(min-width: 640px)'
      },
      {
        path: `${path}/${name}--small.${ext}`,
        media: '(min-width: 200px)'
      }
    ]
  }

}
