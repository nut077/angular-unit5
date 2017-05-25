import {Component} from '@angular/core';
import {Post} from "./shared/post.model";
import {View} from "./shared/view.enum";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  currentView: View = View.SHOW_ALL;
  View = View;
  posts: Post[] = [];
  createPost(post: Post) {
    this.posts.push(post);
    this.changeCurrentView(View.SHOW_ALL);
  }

  changeCurrentView(view: View) {
    this.currentView = view;
  }
}
