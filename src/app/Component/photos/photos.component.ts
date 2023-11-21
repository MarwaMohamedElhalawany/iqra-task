import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Photo } from './photos.model';
import { PhotosService } from 'src/app/Services/photos.service';
import * as moment from 'moment-timezone';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  // currentDate: string;

  error: string = '';
  // photos: Observable<Photo[]> = this.photoService.getPhotos();
  photos:any[]=[]

  constructor(private photoService: PhotosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPhotos();
  }


  // this.photos$ = this.photoService.getPhotos();
  addForm = this.fb.group({
    photoId: [new Date()],
    photoUrl: ['', Validators.required],
    title: ['', Validators.required],
    // date: [new Date().getTime()],
    date: [null, Validators.required],

  });

  addPhoto() {
    const title = this.addForm.value.title;
    const date = this.addForm.value.date;
    const photoUrl = this.addForm.value.photoUrl;
    const photoId = this.addForm.value.photoId;

    this.photoService.addPhoto(title, date, photoUrl , photoId)
      .then(() => {
        console.log('Photo added successfully');
        this.getPhotos() ;
      })
      .catch((error) => {
        console.error('Error adding photo:', error);
      });
  }




  getPhotos() {
    this.photoService.getPhotos().subscribe((res) => {
    this.photos = res ;
    console.log(this.photos)
    });
  }


  deletePhoto(photoId: string) {
    this.photoService.deletePhoto(photoId)
      .then(() => {
        console.log('Photo deleted successfully');
        this.getPhotos(); 
      })
      .catch((error) => {
        console.error('Error deleting photo:', error);
      });
  }
}



