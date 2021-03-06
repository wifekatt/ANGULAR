
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {

  AdminsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private adminApi : AdminApiService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AdminDialogComponent>) { }


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
  alert("admin updated successfully")

}

updateAdmin(){
  alert("admin updated successfully")
}
}



/*
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {

  AdminsForm !: FormGroup;
  actionBtn : string = "Save";

  constructor(private formBuilder : FormBuilder ,
    private adminApi : AdminService ,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AdminDialogComponent>) { }

    ngOnInit(): void {
      this.AdminsForm = this.formBuilder.group({
        adminName : ['',Validators.required],
        adminPassword : ['',Validators.required],
        privilegeID : ['',Validators.required],
        })
        if(this.editData){
          this.actionBtn = "Update";
          this.AdminsForm.controls['adminName'].setValue(this.editData.adminName);
          this.AdminsForm.controls['adminPassword'].setValue(this.editData.adminPassword);
          this.AdminsForm.controls['privilegeID'].setValue(this.editData.privilegeID);
        }
  }
  addAdmin(){
    if(!this.editData){
      if(this.AdminsForm.valid){
        this.adminApi.createAdmin(this.AdminsForm.value)
        .subscribe({
          next:(res)=>{
            alert("admin added successfully")
            this.AdminsForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("error while adding the admin!!")
          }
        })
      }
    }else{
      this.updateAdmin();
    }
  
  }
  
  updateAdmin(){
    console.log(this.editData.adminID)
        this.adminApi.updateAdmin(this.editData.adminID,this.AdminsForm.value)
        .subscribe({
          next:(res)=>{
            alert("Admin updated successfully")
            this.AdminsForm.reset();
            this.dialogRef.close('update');
          },
          error:()=>{
            alert("error while updating the Admin!!")
          }
        })
      }
  }
  */