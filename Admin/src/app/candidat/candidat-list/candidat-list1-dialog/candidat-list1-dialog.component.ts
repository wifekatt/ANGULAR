import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CondidateApiService } from '../../../services/condidate-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-candidat-list1-dialog',
  templateUrl: './candidat-list1-dialog.component.html',
  styleUrls: ['./candidat-list1-dialog.component.css']
})
export class CandidatList1DialogComponent implements OnInit {

  CandidatsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private CandidatApi : CondidateApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<CandidatList1DialogComponent>) { }

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
    if(!this.editData){
      if(this.CandidatsForm.valid){
        this.CandidatApi.postCondidate(this.CandidatsForm.value)
        .subscribe({
          next:(res)=>{
            alert("Candidat added successfully")
            this.CandidatsForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the Candidat!!")
          }
        })
      }
    }else{
      this.updateCandidat();
    }
  
  }
  
  updateCandidat(){
    console.log(this.editData.CandidatID)
        this.CandidatApi.putCondidate(this.editData.CandidatID,this.CandidatsForm.value)
        .subscribe({
          next:(res)=>{
            alert("Candidat updated successfully")
            this.CandidatsForm.reset();
            this.dialogRef.close('update');
          },
          error:()=>{
            alert("error while updating the Candidat!!")
          }
        })
      }
  }
  