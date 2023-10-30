import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-editorhtml',
  templateUrl: './editorhtml.component.html',
  styleUrls: ['./editorhtml.component.scss']
})
export class EditorhtmlComponent {

   name = 'Angular 6';
   htmlContent = '';

  config: AngularEditorConfig = {
    
     editable: true,
     spellcheck: true,
     uploadWithCredentials: false,
  	 showToolbar: true,
     enableToolbar:	true,
     height: '10rem',
     minHeight: '5rem',
     placeholder: 'Enter text in this rich text editor....',
     defaultParagraphSeparator: 'p',
     defaultFontName: 'Arial',
     
     customClasses: [
       {
         name: 'Quote',
         class: 'quoteClass',
       },
       {
         name: 'Title Heading',
         class: 'titleHead',
         tag: 'h1',
       },
     ],
   };
}
