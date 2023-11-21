import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { FroalaOptions } from 'angular-froala-wysiwyg';
import { FormControl } from '@angular/forms'; // Import FormControl

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  export class HomeComponent {
    froalaOptions: any = {};
    editorContent ="" ;                                                           

  constructor(private firestore:AngularFirestore) {}

  saveToFirestore() {
    const content = JSON.stringify(this.editorContent);
    this.firestore.collection('s-editor').doc('xKYA5so78tN385Ob25zQ').set({
      content: content
    })
    .then(() => {
      console.log('Content saved to Firestore');
      this.firestore.collection('s-editor').doc('xKYA5so78tN385Ob25zQ').valueChanges()
      .subscribe((data: any) => {
       const content = data?.content || '';
       this.editorContent = JSON.parse(content);  
      })
      }  )
    .catch((error) => {
      console.error('Error saving content:', error);
    });
  }

  ngOnInit() {
    this.firestore.collection('s-editor').doc('xKYA5so78tN385Ob25zQ').valueChanges()
      .subscribe((data: any) => {
        const content = data?.content || '';
      this.editorContent = JSON.parse(content);

      });
  }
}

