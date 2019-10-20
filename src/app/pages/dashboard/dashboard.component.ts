import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubAPIService } from 'src/app/services/githubAPI.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  $data: any;
  searchForm: FormGroup;
  options: string[] = [];

  constructor(
    private service: GithubAPIService,
    private router: Router
    ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchControl: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id])
  }

  searchUsers() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.$data = this.service.searchUsers(this.searchForm.value.searchControl);
    }
  }

  updateOptions(name) {
    if (name.length > 3) {
      console.log('typed', name);
      this.service.searchUsersAutocompleteOptions(name).subscribe(options => {
        this.options = options;
      });
    }
  }

}
