import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  news: any = {
    content: '',
    title: '',
    author: '',
    publishedAt: '',
    urlToImage: '',
    link: ''
  };
  constructor(public activatedRoute: ActivatedRoute) {
    this.news.content = this.activatedRoute.snapshot.paramMap.get('content');
    this.news.title = this.activatedRoute.snapshot.paramMap.get('title');
    this.news.author = this.activatedRoute.snapshot.paramMap.get('author');
    this.news.publishedAt = this.activatedRoute.snapshot.paramMap.get('publishedAt');
    this.news.urlToImage = this.activatedRoute.snapshot.paramMap.get('urlToImage');
    this.news.link = this.activatedRoute.snapshot.paramMap.get('url')
  }

  ngOnInit() {
  }

}
