import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDoList';
  public toDoArray: string[] = [];
  public form: FormGroup;
  public toDoItem: AbstractControl | null;
  public isEdit: boolean = false;
  public editableIndex: number = -1;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      toDoItem: [''],
    });

    this.toDoItem = this.form.get('toDoItem');
  }

  public addItem(control: AbstractControl | null) {
    this.isEdit = false;
    if (control?.value) {
      this.toDoArray.push(control.value);
      this.toDoItem?.reset('');
    }
  }

  public deleteItem(value: string) {
    this.isEdit = false;
    const idx = this.toDoArray.indexOf(value);
    if (idx !== -1) {
      this.toDoArray.splice(idx, 1);
    }
  }

  public onEdit(index: number) {
    this.editableIndex = index;
    this.isEdit = true;
  }
}
