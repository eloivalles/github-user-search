import { Component, OnInit } from '@angular/core';
import { GithubAPIService } from 'src/app/services/githubAPI.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  data;

  constructor(
    private service: GithubAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');

    this.service.getUser(id).subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}
