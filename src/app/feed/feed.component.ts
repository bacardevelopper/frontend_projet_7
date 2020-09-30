import { Component, OnInit } from '@angular/core';
import { PostAndGetArticles } from '../services/PostArticles';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {
    // FONCTION RECUPERER ARTICLES
    onGet(){
      // envoit vers le backend
      this.postAndGet.getPost();
    }

    onPost(){
      // envoit vers le backend
      this.postAndGet.userPost();
    }
  constructor(private postAndGet : PostAndGetArticles) { }

  ngOnInit(): void {
  }

}
