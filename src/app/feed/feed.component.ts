import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostAndGetArticles } from '../services/PostArticles';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {
    // fonction d'inscription
    onPost(){

      // envoit vers le backend
      this.postAndGet.getPost();
    }
  constructor(private postAndGet : PostAndGetArticles) { }

  ngOnInit(): void {
  }

}
