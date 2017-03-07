import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'
@Component({
  selector : 'app-twtr',
  templateUrl : './twtr.component.html',
  styleUrls : ['./twtr.component.css']
})

export class TwtrComponent implements OnInit {
  twtrs : any = [];
  constructor (private postsService : PostsService){ }
  ngOnInit(){
    this.postsService.getAllTwtrs().subscribe(twtrs => {
      this.twtrs = twtrs;
    });
  }
}
