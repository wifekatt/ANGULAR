import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CandidatService } from '../../service/candidat.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-candidat-dialog',
  templateUrl: './candidat-dialog.component.html',
  styleUrls: ['./candidat-dialog.component.css']
})
export class CandidatDialogComponent implements OnInit {
  CandidatsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private CandidatApi : CandidatService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CandidatDialogComponent>) { }

    ngOnInit(): void {
      this.CandidatsForm = this.formBuilder.group({
        candidatName : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.CandidatsForm.controls['candidatName'].setValue(this.editData.candidatName);
        }
  }
  addCandidat(){
    
            alert("Candidat added successfully")
            
  
  }
  
  updateCandidat(){
    
            alert("Candidat updated successfully")
            
  }
}