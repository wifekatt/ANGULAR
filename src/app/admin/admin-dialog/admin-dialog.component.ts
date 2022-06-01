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
    this.adminApi.updateAdmin(this.editData.id,this.AdminsForm.value)
    .subscribe({
      next:(res)=>{
        alert("user updated successfully")
        this.AdminsForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("error while updating the user!!")
      }
    })
  }
  }
  