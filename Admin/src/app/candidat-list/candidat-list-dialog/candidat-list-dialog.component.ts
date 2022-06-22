import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CandidatListService } from '../../service/candidat-list.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-candidat-list-dialog',
  templateUrl: './candidat-list-dialog.component.html',
  styleUrls: ['./candidat-list-dialog.component.css']
})
export class CandidatListDialogComponent implements OnInit {
  ListsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private ListApi : CandidatListService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CandidatListDialogComponent>) { }

    
    ngOnInit(): void {
      this.ListsForm = this.formBuilder.group({
        listName : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.ListsForm.controls['listName'].setValue(this.editData.listName);
        }
  }
  addList(){
    
            alert("List added successfully")
            
  
  }
  
  updateList(){
    
            alert("List updated successfully")
           
  }
}
