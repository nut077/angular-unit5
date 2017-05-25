import {Component, EventEmitter, Input, OnChanges, Output, Renderer, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-post-form-image',
  templateUrl: './post-form-image.component.html',
  styleUrls: ['./post-form-image.component.css']
})
export class PostFormImageComponent implements OnChanges{
  @Input() image: string;
  @Output() imageChange = new EventEmitter();
  @ViewChild('fileInput') fileInput;

  constructor(private renderer: Renderer) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['image'].currentValue) {
      this.image = '/assets/images/no-image.png';
    }
  }

  triggerFileUpload() {
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement,
      'dispatchEvent',
      [new MouseEvent('click', {bubbles: true})]
    )
  }

  uploadImage(event) {
    const reader = new FileReader();
    const image = event.target.files[0];
    reader.onload = () => {
      const result = reader.result;
      this.image = result;
      this.imageChange.emit(result);
    };
    reader.readAsDataURL(image);
  }
}
