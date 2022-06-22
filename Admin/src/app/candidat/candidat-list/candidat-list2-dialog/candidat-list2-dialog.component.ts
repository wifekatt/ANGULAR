import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CondidateApiService } from '../../../services/condidate-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-candidat-list2-dialog',
  templateUrl: './candidat-list2-dialog.component.html',
  styleUrls: ['./candidat-list2-dialog.component.css']
})
export class CandidatList2DialogComponent implements OnInit {

  CandidatsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private CandidatApi : CondidateApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CandidatList2DialogComponent>) { }

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
    
            alert("Candidat list added successfully")
            
  
  }
  
  updateCandidat(){
    
            alert("Candidat list updated successfully")
            
      }
  }
  