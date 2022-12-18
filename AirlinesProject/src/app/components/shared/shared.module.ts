import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component' 
import { NgSelectModule } from "@ng-select/ng-select";
import { DeleteModalComponent } from './table/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    TableComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  exports: [
    MatTableModule,
    TableComponent
  ]
})
export class SharedModule { }
