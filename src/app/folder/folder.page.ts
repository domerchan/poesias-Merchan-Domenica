import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoemasService } from '../shared/services/poemas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  poemas: Observable<any[]>

  constructor(private activatedRoute: ActivatedRoute,
    private poemasService: PoemasService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.poemas = this.poemasService.getPoemas();
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

}
