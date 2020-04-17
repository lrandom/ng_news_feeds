import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: Array<any> = new Array<any>();
  q: string = 'bitcoin';
  params: any = {
    q: this.q,
    sortBy: 'publishedAt',
    from: '2020-03-17'
  };
  constructor(public newsService: NewsService, public router: Router) { }

  onSearch() {
    this.params.q = this.q;
    this.list = [];
    this.newsService.getNews(this.params).toPromise().then((news: any) => {
      this.list = this.list.concat(news.articles);
      console.log(this.list);
    })

  }

  ngOnInit() {
    this.newsService.getNews(this.params).toPromise().then((news: any) => {
      this.list = this.list.concat(news.articles);
      console.log(this.list);
    })
  }

  goToDetail(item) {
    this.router.navigate(['detail', item])
  }

}
