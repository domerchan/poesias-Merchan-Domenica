import { Component, OnInit } from '@angular/core';
import { PoemasService } from '../../services/poemas.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poemas',
  templateUrl: './poemas.page.html',
  styleUrls: ['./poemas.page.scss'],
})
export class PoemasPage implements OnInit {

  poemas: Observable<any[]>

  constructor(private poemasService: PoemasService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.poemas = this.poemasService.getPoemas();
  }

  async loginGoogle() {
    let error = await this.auth.googleLogin();
    if (error === undefined) {
      this.router.navigate(['folder/Inbox']);
    } else {
      alert(JSON.stringify(error));
    }
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

}
