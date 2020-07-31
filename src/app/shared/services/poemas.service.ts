import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Poema } from '../model/poema';

@Injectable({
  providedIn: 'root'
})
export class PoemasService {

  constructor(private afs: AngularFirestore) { }

  getPoemas(): Observable<any[]> {
    return this.afs.collection('poemas',
    ref => ref.orderBy('fecha', 'asc')).valueChanges();
  }

  insertPoema(poema: Poema) {
    const refPoema = this.afs.collection('poemas')
    poema.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(poema));
    refPoema.doc(poema.uid).set(param, {merge: true})
  }

}
