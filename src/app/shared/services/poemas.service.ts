import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoemasService {

  constructor(private afs: AngularFirestore) { }

  getPoemas(): Observable<any[]> {
    return this.afs.collection('poemas',
    ref => ref.orderBy('fecha', 'asc')).valueChanges();
  }

}
