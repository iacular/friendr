import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    {
      id: 1,
      user_id: 10,
      date: 'Date Fri Jun 28 2024 11:46:27 GMT+0300 (Eastern European Summer Time)',
      title: 'Post 1',
      description: 'This is my first post',
    },
    {
      id: 2,
      user_id: 20,
      date: 'Date Fri Jun 28 2024 11:46:27 GMT+0300 (Eastern European Summer Time)',
      title: 'Post 2',
      description: 'This is my second post',
    },
    {
      id: 3,
      user_id: 30,
      date: 'Date Fri Jun 28 2024 11:46:27 GMT+0300 (Eastern European Summer Time)',
      title: 'Post 3',
      description: 'This is my third post',
    }
  ];

  title: string ='';
  description: string ='';

  createPost() {  
    this.posts.push({
      id: this.posts.length + 1,
      user_id: 40,
      date: new Date(),
      title: this.title,
      description: this.description
    });
  }
}
