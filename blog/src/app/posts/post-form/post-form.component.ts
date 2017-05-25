import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from "../shared/post.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() formSubmit:EventEmitter<Post> = new EventEmitter();
  post: Post;

  constructor() {
    this.resetPost();
  }

  createPost() {
    this.formSubmit.emit(this.post);
    this.resetPost();
  }

  imageChange(image) {
    this.post.image = image;
  }

  private resetPost() {
    this.post = new Post();
  }
}
