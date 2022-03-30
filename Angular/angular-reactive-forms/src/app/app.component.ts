import { Component } from '@angular/core';
export type EditorType = 'name' | 'profile';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reactive-forms';
  editor:EditorType='name';
  get showNameEditor(){
    return this.editor === 'name';
  }
  get showProfileEditor(){
    return this.editor === 'profile';
  }

  toggleEditor(type:EditorType){
    this.editor=type;
  }

}
