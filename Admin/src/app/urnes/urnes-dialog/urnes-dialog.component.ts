import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UrneService } from '../../service/urne.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-urnes-dialog',
  templateUrl: './urnes-dialog.component.html',
  styleUrls: ['./urnes-dialog.component.css']
})
export class UrnesDialogComponent implements OnInit {

  UrnesForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private UrneApi : UrneService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<UrnesDialogComponent>) { }

    ngOnInit(): void {
      this.UrnesForm = this.formBuilder.group({
        urneName : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.UrnesForm.controls['urneName'].setValue(this.editData.urneName);
        }
  }
  addUrne(){
   
            alert("Ballot box added successfully")
            
  
  }
  
  updateUrne(){
   
            alert("Ballot box updated successfully")
            
  }
}
  
