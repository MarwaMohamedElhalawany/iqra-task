import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../Component/photos/photos.model';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private photoCollection: AngularFirestoreCollection<Photo>;

  constructor(private firestore: AngularFirestore) {
    this.photoCollection = this.firestore.collection<Photo>('photos');
  }

  getPhotos(): Observable<any[]> {
    return this.firestore.collection('photoform').valueChanges({ idField: 'id' });
  }



  addPhoto(title: any, date: any, photoUrl: any ,photoId:any): Promise<any> {
    return this.firestore.collection('photoform').add({
      title,
      date,
      photoUrl,
      photoId,
    });
  }

  deletePhoto(photoId: string): Promise<void> {
    return this.firestore.collection('photoform').doc(photoId).delete();
  }
}


