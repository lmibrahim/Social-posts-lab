import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  // explicitly writing false so form doesnt show when page loads (putting new post)
  showForm: boolean = false;

  myPosts: Post[] = [
    {
      title: 'Something about Tueday',
      thought: 'Today seems long',
    },
    {
      title: 'Paczki',
      thought: 'Gimme all that fat',
    },
    {
      title: 'Angular',
      thought: 'Angular is something',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post);
    this.toggleForm();
  };

  toggleForm = () => {
    this.showForm = !this.showForm;
  };
}
