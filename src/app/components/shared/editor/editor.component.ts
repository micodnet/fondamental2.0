import { Component } from '@angular/core';
// import { NuMonacoEditorComponent, NuMonacoEditorDiffModel, NuMonacoEditorEvent, NuMonacoEditorModel } from '@ng-util/monaco-editor';
// import * as ckeditor5 from '@ckeditor/ckeditor5-angular/ckeditor.module';
// import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// import { CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-editor, app-root',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent {

  //editor!: NuMonacoEditorComponent;
  // public Editor = ckeditor5;
  // public editorData = '<p>Hello, world!</p>';
  // public onChange( { editor }: ChangeEvent ) {
  //const data = editor.getData();
    
    //console.log( data );

    //@ViewChild( 'editor' ) editorComponent: CKEditorComponent;

    //public getEditor() {
        // Warning: This may return "undefined" if the editor is hidden behind the `*ngIf` directive or
        // if the editor is not fully initialised yet.
     //   return this.editorComponent.editorInstance;
   // }
}

  // formatDocument() {
  //   if (this.editorComponent && this.editorComponent.editor) {
  //     this.editorComponent.editor.getAction('editor.action.formatDocument').run();
  //   }
  // }
  
  // @ViewChild('a', { static: true })
  // editorComponent!: EditorComponent; // Définissez votre éditeur Monaco

  // value = '{"p1":"a"}';
  // //value: string = 'const a = 1;';
  // editorOptions = { theme: 'vs-dark', language: 'javascript' };
  // old: NuMonacoEditorDiffModel = { code: `<p>1</p>` };
  // new: NuMonacoEditorDiffModel = { code: `<p>2</p>` };
  
  // model!: NuMonacoEditorModel;
  // showEvent(e: NuMonacoEditorEvent): void {
  //   if (e.type === 'init') {
  //     this.model = {
  //       language: 'json',
  //       uri: monaco.Uri.parse('a://b/foo.json'),
  //     };
  //   }
  // }
  

