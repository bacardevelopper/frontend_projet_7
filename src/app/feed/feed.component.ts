import { Component, OnInit } from '@angular/core';
import { PostAndGetArticles } from '../services/PostArticles';
import { NgForm } from '@angular/forms';
import { Upload } from '../services/upload';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  
   feeds :any = JSON.parse(localStorage.getItem('feed'));
 
  
  data: any;
  upload(event:any){
    this.uplUp.uploadFile(event);
    
  }

  // FONCTION RECUPERER ARTICLES
  onGet() {
    // envoit vers le backend
    this.postAndGet.getPost();
  }
  // FONCTION POST
  onPost(form: NgForm) {
    // mettre en place
    this.data = form.value;
    // envoit vers le backend
    this.postAndGet.userPost(this.data);
  }
  constructor(
    private postAndGet: PostAndGetArticles,
    private uplUp: Upload
  ) {}

  // afficher sur le feed

  ngOnInit(): void {
    this.onGet();
    
  }
}
