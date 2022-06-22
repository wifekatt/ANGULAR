

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AdminApiService } from '.././services/admin-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-privilege-dialog',
  templateUrl: './privilege-dialog.component.html',
  styleUrls: ['./privilege-dialog.component.css']
})
export class PrivilegeDialogComponent implements OnInit {

  AdminsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private adminApi : AdminApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<PrivilegeDialogComponent>) { }


  ngOnInit(): void {
    this.AdminsForm = this.formBuilder.group({
      FullName : ['',Validators.required],
      Password : ['',Validators.required],
      PrivilegeID : ['',Validators.required],
      })
      if(this.editData){
        this.actionBtn = "Update";
        this.AdminsForm.controls['FullName'].setValue(this.editData.FullName);
        this.AdminsForm.controls['Password'].setValue(this.editData.Password);
        this.AdminsForm.controls['PrivilegeID'].setValue(this.editData.PrivilegeID);
      }
}
addAdmin(){
  
          alert("privilege added successfully")
         

}

updateAdmin(){
  alert("privilege updated successfully")
}
}

